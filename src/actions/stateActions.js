import StateApi from '../api/stateApi';
import action from './mirrorActions';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadStatesSuccess(states) {
  return {
    type: action.LOAD_STATES_SUCCESS,
    states
  };
}

export function loadStatesFailed(message) {
  return {
    type: action.LOAD_STATES_FAILED,
    message
  };
}

export function loadStates() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return StateApi.getAllStates().then(states => {
      dispatch(loadStatesSuccess(states));
    }).catch(error => {
      dispatch(loadStatesFailed(error));
    });
  };
}
