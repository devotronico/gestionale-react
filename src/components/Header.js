import React, { useContext } from 'react';
import '../style/Header.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import NavlinkProtected from '../auth/NavlinkProtected';

const Header = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="selected">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/email" exact activeClassName="selected">
              EMAIL
            </NavLink>
          </li>

          {auth ? (
            <>
              {/* <NavlinkProtected
                to="/indirizzi"
                activeClassName="selected"
                roles={['admin', 'user']}
                role={auth.role}
              >
                INDIRIZZI
              </NavlinkProtected> */}
              <li>
                <NavLink to="/clienti" activeClassName="selected">
                  CLIENTI
                </NavLink>
              </li>
              <li>
                <NavLink to="/indirizzi" activeClassName="selected">
                  INDIRIZZI
                </NavLink>
              </li>
              <li>
                <NavLink to="/pizza" activeClassName="selected">
                  PIZZA
                </NavLink>
              </li>
            </>
          ) : null}
          <li>
            <NavLink
              to={auth ? '/auth/logout' : '/auth/signin'}
              activeClassName="selected"
            >
              AUTH
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
