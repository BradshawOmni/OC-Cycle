import action from './mirrorActions';
import customerApi from '../api/customerApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';

//Types
const LOAD_CUSTOMERS_SUCCESS = "LOAD_CUSTOMERS_SUCCESS",
      LOAD_CUSTOMERS_FAILED = "LOAD_CUSTOMERS_FAILED",
      CREATE_CUSTOMER_SUCCESS = "CREATE_CUSTOMER_SUCCESS",
      CREATE_CUSTOMER_FAILED = "CREATE_CUSTOMER_FAILED",
      UPDATE_CUSTOMER_SUCCESS = "UPDATE_CUSTOMER_SUCCESS",
      UPDATE_CUSTOMER_FAILED = "UPDATE_CUSTOMER_FAILED";

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

  return {
    type: action.CREATE_CUSTOMER_SUCCESS,
    customer
  };
}
export function createcustomerfailed(message) {

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

export function updatecustomerfailed(message) {

  return {
    type: action.UPDATE_CUSTOMER_FAILED,
    message
  };
}

export function loadcustomers() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    try {
      axios.get('http://localhost:3000/customers', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => { 
            return response.data;
          }).then(data => {
            console.log(data);
            dispatch(loadcustomersSuccess(data));
            return data;
          }).catch(err => {
            console.log("Error with the Api request");
          });
      // return customerApi.getAllCustomers().then(customers => {
        
      // });
    } catch (error) {
      return dispatch(loadcustomersFailed(error.message));
    }
  };
}

export function saveCustomer(customer) {
 
  return function (dispatch, getState) {
    
    dispatch(beginAjaxCall());
   
    try {
        axios.post('http://localhost:3000/customers', {
          method: 'POST',
          data: customer,
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors'
          }).then(response => { 
                
                

                return response

                
              }).then(res => {
                console.log(JSON.stringify(res.data) + 'Response Data');
                return dispatch(createcustomerSuccess(JSON.stringify(res.data)));
              }).catch(err => {
                console.log("Error with the Api request");
              });
      // console.log(customer.customerId + '---- ID');
      //   return customerApi.saveCustomer(customer).then(savedCustomer => {
      //   customer.customerId ? dispatch(updatecustomersuccess(savedCustomer)) :
      //   dispatch(createcustomerSuccess(savedCustomer));
          
      // });
    } catch (error) {
      console.log(customer.customerId + '---- ID');
      dispatch(ajaxCallError(error));
      return customer.customerId ? dispatch(updateCustomerFailed(error.message)) :
        dispatch(createCustomerFailed(error.message));
    }
  };
}
