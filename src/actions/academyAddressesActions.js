import * as types from './actionTypes';
import AcademyAddressApi from '../api/academyAddressApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadAcademyAddressesSuccess(academyAddresses) {
  return {
    type: types.LOAD_ACADEMYADDRESSES_SUCCESS,
    academyAddresses
  };
}

export function loadAcademyAddressesFailed(message) {
  return {
    type: types.LOAD_ACADEMYADDRESSES_FAILED,
    message
  };
}

export function loadAcademyAddresses(academyId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return AcademyAddressApi.getAcademyAddresses(academyId).then(academyAddresses => {
        dispatch(loadAcademyAddressesSuccess(academyAddresses));
      });
    } catch (error) {
      console.log('ERROR:', error.message); // eslint-disable-line no-console
      return dispatch(loadAcademyAddressesFailed(error.message));
    }
  };
}
