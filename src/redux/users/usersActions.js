import { SIGNIN, SIGNUP, LOGOUT } from './usersTypes';

export const signin = id => {
  return {
    type: SIGNIN,
    id: id
  };
};

export const signup = newUser => {
  // console.log('newUser', newUser);
  return {
    type: SIGNUP,
    newUser: newUser
  };
};

export const logout = id => {
  return {
    type: LOGOUT,
    id: id
  };
};
