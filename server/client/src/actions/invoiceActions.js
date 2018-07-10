import action from './mirrorActions';
import InvoiceApi from '../api/mockInvoiceApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadInvoicesSuccess(invoices) {
  return {
    type: action.LOAD_INVOICES_SUCCESS,
    invoices
  };
}

export function loadInvoicesFailed(message) {
  return {
    type: action.LOAD_INVOICES_FAILED,
    message
  };
}

export function loadInvoiceSuccess(invoice) {
  return {
    type: action.LOAD_INVOICE_SUCCESS,
    invoice
  };
}

export function loadInvoiceFailed(message) {
  return {
    type: action.LOAD_INVOICE_FAILED,
    message
  };
}

export function createInvoiceSuccess(invoice) {
  return {
    type: action.CREATE_INVOICE_SUCCESS,
    invoice
  };
}

export function createInvoiceFailed(message) {
  return {
    type: action.CREATE_INVOICE_FAILED,
    message
  };
}

export function updateInvoiceSuccess(invoice) {
  return {
    type: action.UPDATE_INVOICE_SUCCESS,
    invoice
  };
}

export function updateInvoiceFailed(message) {
  return {
    type: action.UPDATE_INVOICE_FAILED,
    message
  };
}

export function deleteInvoiceSuccess(invoice) {
  return {
    type: action.DELETE_INVOICE_SUCCESS,
    invoice
  };
}

export function deleteInvoiceFailed(message) {
  return {
    type: action.DELETE_INVOICE_FAILED,
    message
  };
}

export function loadInvoices() {
  let invoices = [];
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      //console.log(ApiInvoice);
      return InvoiceApi.getAllInvoices().then(invoices => {
        dispatch(loadInvoicesSuccess(invoices));
      });
    } catch (error) {
      return dispatch(loadInvoicesFailed(error.message));
    }
  };
}

export function loadInvoice(invoiceId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return InvoiceApi.getInvoiceById(invoiceId).then(invoice => {
        dispatch(loadInvoiceSuccess(invoice));
      });
    } catch (error) {
      return dispatch(loadInvoiceFailed(error));
    }
  };
}

export function saveInvoice(invoice) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return InvoiceApi.saveInvoice(invoice).then(savedInvoice => {
        invoice.invoiceId ? dispatch(updateInvoiceSuccess(savedInvoice)) :
          dispatch(createInvoiceSuccess(savedInvoice));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return invoice.invoiceId ? dispatch(updateInvoiceFailed(error.message)) :
        dispatch(createInvoiceFailed(error.message));
    }
  };
}

export function deleteInvoice(invoice) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return InvoiceApi.deleteInvoice(invoice).then(deletedInvoice => {
        dispatch(deleteInvoiceSuccess(invoice));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return dispatch(deleteInvoiceFailed(error.message));
    }
  };
}
