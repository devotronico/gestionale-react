import React, { useContext } from 'react';
import '../../style/users/mode.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

const Mode = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div className="mode">
      {auth ? (
        <NavLink to="/auth/logout" activeClassName="selected">
          LOGOUT
        </NavLink>
      ) : (
        <>
          <NavLink
            to="/auth/signin"
            aria-current="true"
            activeClassName="selected"
          >
            SIGNIN
          </NavLink>
          <NavLink to="/auth/signup" activeClassName="selected">
            SIGNUP
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Mode;
