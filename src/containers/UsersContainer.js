import React from 'react';

// proteggere le rotte
import NotPrivateRoute from '../auth/NotPrivateRoute';
import PrivateRoute from '../auth/PrivateRoute';

import Mode from '../components/users/Mode';
import SigninConnect from '../components/users/SigninConnect';
import SignupConnect from '../components/users/SignupConnect';
import LogoutConnect from '../components/users/LogoutConnect';

const UsersContainer = () => {
  return (
    <div className="content users">
      <Mode />
      <NotPrivateRoute path="/auth/signin">
        <SigninConnect />
      </NotPrivateRoute>
      <NotPrivateRoute path="/auth/signup">
        <SignupConnect />
      </NotPrivateRoute>
      <PrivateRoute path="/auth/logout" roles={['developer', 'admin', 'user']}>
        <LogoutConnect />
      </PrivateRoute>
    </div>
  );
};

export default UsersContainer;
