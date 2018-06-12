import action from './mirrorActions';
import AddressTypeApi from '../api/addressTypeApi';
import {
  beginAjaxCall,
  ajaxCallError
} from './ajaxStatusActions';

export function loadAddressTypesSuccess(addressTypes) {
  return {
    type: action.LOAD_ADDRESS_TYPES_SUCCESS,
    addressTypes
  };
}

export function loadAddressTypesFailed(message) {
  return {
    type: action.LOAD_ADDRESS_TYPES_FAILED,
    message
  };
}

export function createAddressTypeSuccess(addressType) {
  return {
    type: action.CREATE_ADDRESS_TYPE_SUCCESS,
    addressType
  };
}

export function createAddressTypeFailed(message) {
  return {
    type: action.CREATE_ADDRESS_TYPE_FAILED,
    message
  };
}

export function updateAddressTypeSuccess(addressType) {
  return {
    type: action.UPDATE_ADDRESS_TYPE_SUCCESS,
    addressType
  };
}

export function updateAddressTypeFailed(message) {
  return {
    type: action.UPDATE_ADDRESS_TYPE_FAILED,
    message
  };
}

export function loadAddressTypes() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return AddressTypeApi.getAllAddressTypes().then(addressTypes => {
        dispatch(loadAddressTypesSuccess(addressTypes));
      });
    } catch (error) {
      console.log('ERROR:', error.message);
      return dispatch(loadAddressTypesFailed(error.message));
    }
  };
}

export function saveAddressType(addressType) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return AddressTypeApi.saveAddressType(addressType).then(savedAddressType => {
        addressType.addressTypeId ? dispatch(updateAddressTypeSuccess(savedAddressType)) :
          dispatch(createAddressTypeSuccess(savedAddressType));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return addressType.addressTypeId ? dispatch(updateAddressTypeFailed(error.message)) :
        dispatch(createAddressTypeFailed(error.message));
    }
  };
}

