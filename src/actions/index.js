import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';
const ROOT_URL = 'http://localhost:3090';


export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        console.log("success");
        browserHistory.push('/feature');
        dispatch({ type: AUTH_USER });
      })
      .catch(() => {
        dispatch(authError("Login error"));
      })
  }
  
  // Submit email/password to the server
  //
  // If request is good...
  // -Update state to indicate user is authenticated
  // - Save the JWT token
  // - redirect to the route '/feature'
  //
  // If request is bad...
  // - Show an error to the user
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}
