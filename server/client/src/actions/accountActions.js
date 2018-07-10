import action from './mirrorActions';
import AccountApi from '../api/mockAccountApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadAccountsSuccess(accounts) {
  return {
    type: action.LOAD_ACCOUNTS_SUCCESS,
    accounts
  };
}

export function loadAccountsFailed(message) {
  return {
    type: action.LOAD_ACCOUNTS_FAILED,
    message
  };
}

export function loadAccountSuccess(account) {
  return {
    type: action.LOAD_ACCOUNT_SUCCESS,
    account
  };
}

export function loadAccountFailed(message) {
  return {
    type: action.LOAD_ACCOUNT_FAILED,
    message
  };
}

export function createAccountSuccess(account) {
  return {
    type: action.CREATE_ACCOUNT_SUCCESS,
    account
  };
}

export function createAccountFailed(message) {
  return {
    type: action.CREATE_ACCOUNT_FAILED,
    message
  };
}

export function updateAccountSuccess(account) {
  return {
    type: action.UPDATE_ACCOUNT_SUCCESS,
    account
  };
}

export function updateAccountFailed(message) {
  return {
    type: action.UPDATE_ACCOUNT_FAILED,
    message
  };
}

export function deleteAccountSuccess(account) {
  return {
    type: action.DELETE_ACCOUNT_SUCCESS,
    account
  };
}

export function deleteAccountFailed(message) {
  return {
    type: action.DELETE_ACCOUNT_FAILED,
    message
  };
}

export function loadAccounts() {
  let accounts = [];
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      //console.log(ApiAccount);
      return AccountApi.getAllAccounts().then(accounts => {
        dispatch(loadAccountsSuccess(accounts));
      });
    } catch (error) {
      return dispatch(loadAccountsFailed(error.message));
    }
  };
}

export function loadAccount(accountId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return AccountApi.getAccountById(accountId).then(account => {
        dispatch(loadAccountSuccess(account));
      });
    } catch (error) {
      return dispatch(loadAccountFailed(error));
    }
  };
}

export function saveAccount(account) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return AccountApi.saveAccount(account).then(savedAccount => {
        account.accountId ? dispatch(updateAccountSuccess(savedAccount)) :
          dispatch(createAccountSuccess(savedAccount));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return account.accountId ? dispatch(updateAccountFailed(error.message)) :
        dispatch(createAccountFailed(error.message));
    }
  };
}

export function deleteAccount(account) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return AccountApi.deleteAccount(account).then(deletedAccount => {
        dispatch(deleteAccountSuccess(account));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return dispatch(deleteAccountFailed(error.message));
    }
  };
}
