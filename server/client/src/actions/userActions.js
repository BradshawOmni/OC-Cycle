import action from './mirrorActions';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';

//Types
const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS",
      LOAD_USERS_FAILED = "LOAD_USERS_FAILED",
      LOAD_USER = "LOAD_USER",
      UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
      UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export function loadusersSuccess(users) {
  return {
    type: action.LOAD_USERS_SUCCESS,
    users
  };
}
export function loadusersFailed(message) {
  
  return {
    type: action.LOAD_USERS_FAILED,
    message
  };
}

export function loaduser(users, userId) {
  return {
    type: action.LOAD_USER,
    users,
    userId
  };
}

export function updateusersuccess(user) {

  return {
    type: action.UPDATE_USER_SUCCESS,
    user
  };
}

export function updateuserfailed(message) {

  return {
    type: action.UPDATE_USER_FAILED,
    message
  };
}

export function loadusers() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    try {
      axios.get('/api/users/all', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => { 
            return response.data;
          }).then(data => {
            console.log(data);
            dispatch(loadusersSuccess(data));
            return data;
          }).catch(err => {
            console.log("Error with the Api request");
          });
      // return userApi.getAllCustomers().then(users => {
        
      // });
    } catch (error) {
      return dispatch(loadusersFailed(error.message));
    }
  };
}


export function updateCustomer(user) {
 
  return function (dispatch, getState) {
    
    dispatch(beginAjaxCall());
   
    try {
        axios.put('/api/users/update-role', {
          method: 'PUT',
          data: user,
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
                 dispatch(updateusersuccess(newData));
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
      return user.userId ? dispatch(updateuserfailed(error.message)) :
        dispatch(updateuserfailed(error.message));
    }
  };
}
