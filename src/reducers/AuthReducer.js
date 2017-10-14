import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = { 
  email: '',
  error: '',
  password: '',
  user: null,
};

export default (state=INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication failed.', password: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, error: '', user: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
