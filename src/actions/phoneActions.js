import PhoneApi from '../api/phoneApi';
import action from './mirrorActions';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadPhonesSuccess(phones) {
  return {
    type: action.LOAD_PHONES_SUCCESS,
    phones
  };
}

export function loadPhonesFailed(message) {
  return {
    type: action.LOAD_PHONES_FAILED,
    message
  };
}

export function createPhoneSuccess(phone) {
  return {
    type: action.CREATE_PHONE_SUCCESS,
    phone
  };
}

export function createPhoneFailed(message) {
  return {
    type: action.CREATE_PHONE_FAILED,
    message
  };
}

export function updatePhoneSuccess(phone) {
  return {
    type: action.UPDATE_PHONE_SUCCESS,
    phone
  };
}

export function updatePhoneFailed(message) {
  return {
    type: action.UPDATE_PHONE_FAILED,
    message
  };
}

export function savePhone(phone) {
  console.log('PHONE:', phone);
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return PhoneApi.savePhone(phone).then(savedPhone => {
        phone.phoneId ? dispatch(updatePhoneSuccess(savedPhone)) :
          dispatch(createPhoneSuccess(savedPhone));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return phone.phoneId ? dispatch(updatePhoneFailed(error.message)) :
        dispatch(createPhoneFailed(error.message));
    }
  };
}

export function loadPhones() {
  return dispatch => {
    dispatch(beginAjaxCall());
    try {
      return PhoneApi.getAllPhones().then(phones => {
        dispatch(loadPhonesSuccess(phones));
      });
    } catch (error) {
      return dispatch(loadPhonesFailed(error.message));
    }
  };
}
