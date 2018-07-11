import actions from '../actions/mirrorActions';
import * as types from '../actions/actionTypes';
import initialState from './initailState';

export default function invoiceReducer(state = initialState.invoices, action) {
  switch (action.type) {
    case actions.LOAD_INVOICES_SUCCESS:
      return action.invoices;
    case actions.LOAD_INVOICE_SUCCESS:
      return action.invoice;
    case actions.CREATE_INVOICE_SUCCESS:
      return [
        ...state.filter(a => a.invoiceId !== action.invoice.invoiceId).sort(invoice => invoice.name),
        Object.assign({}, action.invoice)
      ];
    case actions.UPDATE_INVOICE_SUCCESS:
      return [
        ...state.filter(invoice => invoice.invoiceId !== action.invoice.invoiceId).sort(invoice => invoice.name),
        Object.assign({}, action.invoice)
      ];
    case actions.DELETE_INVOICE_SUCCESS: {
      return state.filter(invoice => invoice.invoiceId !== action.invoice.invoiceId);
    }
    default:
      return state;
  }
}
