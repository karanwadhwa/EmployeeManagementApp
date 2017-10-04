import firebase from 'firebase';
import { Actions, } from 'react-native-router-flux';
import { 
  EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOADING 
} from './types.js';

// email change action
export const emailChange = text => {
  return {
    type: EMAIL_CHANGE,
    payload: text
  };
};

// password change action
export const passwordChange = text => {
  return { 
    type: PASSWORD_CHANGE,
    payload: text
  };
};

// login attempt action
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
        Actions.main();
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
            Actions.main();
          })
          .catch(() => dispatch({ type: LOGIN_USER_FAIL }));
      });
  };
};