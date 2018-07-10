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
export function createcustomerSuccess(customer) {
  console.log('create customer success');
  return {
    type: action.CREATE_CUSTOMER_SUCCESS,
    customer
  };
}

export function createCustomerFailed(message) {
console.log('CreateFail');
  return {
    type: action.CREATE_CUSTOMER_FAILED,
    message
  };
}

export function updatecustomerSuccess(customer) {
  
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

export function saveCustomer(customer) {
  console.log(customer);
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return customerApi.saveCustomer(customer).then(savedCustomer => {
        console.log(customer.customerId + '---- ID');
        customer.customerId ? dispatch(updatecustomersuccess(savedCustomer)) :
       
          dispatch(createcustomerSuccess(savedCustomer));
         
      });
    } catch (error) {
      
      dispatch(ajaxCallError(error));
      return customer.customerId ? dispatch(updateCustomerFailed(error.message)) :
        dispatch(createCustomerFailed(error.message));
    }
  };
}
