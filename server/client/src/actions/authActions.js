import action from './mirrorActions';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';

//Types
const IS_AUTHENTICATED = "IS_AUTHENTICATED";

export function authenticateVerifySuccess(isAuthenticated) {
  return {
    type: action.AUTHENTICATE_VERIFY_SUCCESS,
    isAuthenticated
  };
}

export function authenticateVerifyFailed(message) {
    return {
      type: action.AUTHENTICATE_VERIFY_FAILED,
      message
    };
  }

export function verifyAuthenticated(user) {
 
    return function (dispatch, getState) {
      
      dispatch(beginAjaxCall());
     
      try {
          axios.get('/auth/verify', {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Methods' : '*'
            },
            mode: 'cors'
            }).then(response => {                 
  
                  return response
  
                  
                }).then(res => {
                  let newData = res.data;
                  console.log(newData);
                   dispatch(authenticateVerifySuccess(newData));
                   return newData;
                }).catch(err => {
                  console.log("Error with the Api request");
                });
        // console.log(user.userId + '---- ID');
        //   return userApi.saveCustomer(user).then(savedCustomer => {
        //   user.userId ? dispatch(updateusersuccess(savedCustomer)) :
        //   dispatch(createuserSuccess(savedCustomer));
            
        // });
      } catch (error) {
        console.log(user.userId + '---- ID');
        dispatch(ajaxCallError(error));
        return user.userId ? dispatch(authenticateVerifyFailed(error.message)) :
          dispatch(authenticateVerifyFailed(error.message));
      }
    };
  }
  
