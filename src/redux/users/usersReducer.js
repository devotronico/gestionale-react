import { SIGNIN, SIGNUP, LOGOUT } from './usersTypes';
import { v4 } from 'uuid';
import Auth from '../../auth/auth';

const USERS_INITIAL_STATE = [
  {
    id: v4(),
    name: 'Daniele',
    email: 'dan@mail.it',
    password: '123456789',
    role: 'developer',
    isAuthenticated: false
  }
];

const usersLocalStorage = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : null;
const usersState = usersLocalStorage ? usersLocalStorage : USERS_INITIAL_STATE;

const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case SIGNIN:
      return state.map(item => {
        if (item.id === action.id) {
          item.isAuthenticated = true;
          Auth.set(item);
        }
        return item;
      });

    case SIGNUP:
      action.newUser.id = v4();
      action.newUser.isAuthenticated = true;
      Auth.set(action.newUser);
      return [...state, action.newUser];
    case LOGOUT:
      return state.map(item => {
        if (item.id === action.id) {
          item.isAuthenticated = false;
        }
        return item;
      });

    default:
      return state;
  }
};

export default usersReducer;
