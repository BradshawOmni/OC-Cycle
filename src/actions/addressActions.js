import action from './mirrorActions';
import AddressApi from '../api/addressApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadAddressesSuccess(addresses) {
  return {
    type: action.LOAD_ADDRESSES_SUCCESS,
    addresses
  };
}

export function loadAddressesFailed(message) {
  return {
    type: action.LOAD_ADDRESSES_FAILED,
    message
  };
}

export function createAddressSuccess(address) {
  return {
    type: action.CREATE_ADDRESS_SUCCESS,
    address
  };
}

export function createAddressFailed(message) {
  return {
    type: action.CREATE_ADDRESS_FAILED,
    message
  };
}

export function updateAddressSuccess(address) {
  return {
    type: action.UPDATE_ADDRESS_SUCCESS,
    address
  };
}

export function updateAddressFailed(message) {
  return {
    type: action.UPDATE_ADDRESS_FAILED,
    message
  };
}

export function loadAddresses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return AddressApi.getAllAddresses().then(addresses => {
        dispatch(loadAddressesSuccess(addresses));
      });
    } catch (error) {
      console.log('ERROR:', error.message);
      return dispatch(loadAddressesFailed(error.message));
    }
  };
}

export function saveAddress(address) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return AddressApi.saveAddress(address).then(savedAddress => {
        address.addressId ? dispatch(updateAddressSuccess(savedAddress)) :
          dispatch(createAddressSuccess(savedAddress));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return address.addressId ? dispatch(updateAddressFailed(error.message)) :
        dispatch(createAddressFailed(error.message));
    }
  };
}
