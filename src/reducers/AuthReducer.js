import { 
  EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOADING 
} from '../actions/types.js';

const INITIAL_STATE = { 
  email: '', 
  password: '',
  errormsg: '',
  user: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOADING:
      return { ...state, loading: true, errormsg: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, errormsg: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};