import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function NotPrivateRoute({ children, ...rest }) {
  const { auth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/logout',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default NotPrivateRoute;
