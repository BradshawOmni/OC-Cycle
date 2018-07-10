import actions from '../actions/mirrorActions';
import * as types from '../actions/actionTypes';
import initialState from './initailState';

export default function accountReducer(state = initialState.accounts, action) {
  switch (action.type) {
    case actions.LOAD_ACCOUNTS_SUCCESS:
      return action.accounts;
    case actions.LOAD_ACCOUNT_SUCCESS:
      return action.account;
    case actions.CREATE_ACCOUNT_SUCCESS:
      return [
        ...state.filter(a => a.accountId !== action.account.accountId).sort(account => account.name),
        Object.assign({}, action.account)
      ];
    case actions.UPDATE_ACCOUNT_SUCCESS:
      return [
        ...state.filter(account => account.accountId !== action.account.accountId).sort(account => account.name),
        Object.assign({}, action.account)
      ];
    case actions.DELETE_ACCOUNT_SUCCESS: {
      return state.filter(account => account.accountId !== action.account.accountId);
    }
    default:
      return state;
  }
}
