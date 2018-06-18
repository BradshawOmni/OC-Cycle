import action from './mirrorActions';
import customerApi from '../api/customerApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadcustomersSuccess(customers) {

  return {
    
    type: action.LOAD_CUSTOMERS_SUCCESS,
    customers
  };
}

export function loadcustomersFailed(message) {

  return {
    type: action.LOAD_CUSTOMERS_FAILED,
    message
  };
}

export function createcustomersuccess(customer) {

  return {
    type: action.CREATE_CUSTOMER_SUCCESS,
    customer
  };
}

export function createCustomerFailed(message) {

  return {
    type: action.CREATE_CUSTOMER_FAILED,
    message
  };
}

export function updatecustomersuccess(customer) {
  
  return {
    type: action.UPDATE_CUSTOMER_SUCCESS,
    customer
  };
}

export function updatePersonFailed(message) {
 
  return {
    type: action.UPDATE_CUSTOMER_FAILED,
    message
  };
}

export function loadcustomers() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return customerApi.getAllCustomers().then(customers => {
        dispatch(loadcustomersSuccess(customers));
      });
    } catch (error) {
      return dispatch(loadcustomersFailed(error.message));
    }
  };
}

export function savecustomer(customer) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return customerApi.savecustomer(customer).then(savedCustomer => {
        customer.customerId ? dispatch(updatecustomersuccess(savedCustomer)) :
          dispatch(createcustomersuccess(savedCustomer));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return customer.customerId ? dispatch(updateCustomerFailed(error.message)) :
        dispatch(createCustomerFailed(error.message));
    }
  };
}
