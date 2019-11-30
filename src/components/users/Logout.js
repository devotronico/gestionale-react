import React, { useContext } from 'react';
import '../../style/users/logout.css';
import { AuthContext } from '../../auth/AuthContext';
import Auth from '../../auth/auth';
import { useHistory } from 'react-router-dom';
import Button from './controls/Button';

const Logout = props => {
  const history = useHistory();

  const { auth, setAuth } = useContext(AuthContext);

  const onFormSubmit = event => {
    event.preventDefault();
    props.logout(auth.id);
    Auth.remove();
    setAuth(null);
    history.push('/');
  };

  return (
    <div className="logout">
      <form
        className="form"
        onSubmit={onFormSubmit}
        noValidate
        autoComplete="off"
      >
        {Object.keys(auth).map(key => (
          <div className="form-group" key={key}>
            <p className="row">
              <span className="key">{key}:</span>
              <span className="value">
                {key === 'password'
                  ? auth[key].replace(/./g, '*')
                  : key === 'isAuthenticated'
                  ? auth[key].toString()
                  : auth[key]}
              </span>
            </p>
          </div>
        ))}
        <Button>LOGOUT</Button>
      </form>
    </div>
  );
};

export default Logout;
