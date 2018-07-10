import action from './mirrorActions';

export function beginAjaxCall() {
  return {
    type: action.BEGIN_AJAX_CALL
  };
}

export function ajaxCallError() {
  return {
    type: action.AJAX_CALL_ERROR
  };
}
