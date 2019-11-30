import React, { useContext, useState } from 'react';
import '../../style/users/Signin.css';
import useForm from './hooks/useForm';

import Message from './Message';
import Name from './controls/Name';
import Email from './controls/Email';
import Password from './controls/Password';

import Auth from '../../auth/auth';

import { AuthContext } from '../../auth/AuthContext';

function Signin(props) {
  // console.log(props.users[0]); // {id: 0, name: "Daniele", email: "dan@mail.it", password: "123456789"}
  const { auth, setAuth } = useContext(AuthContext);
  const [userId, setUserId] = useState(null);

  const inputs = {
    name: React.createRef(),
    email: React.createRef(),
    password: React.createRef()
  };

  const checkIfUserExists = values => {
    const objFound = props.users.find(user => user.email === values.email && user.password === values.password);
    if (objFound) {
      setUserId(objFound.id);
      Auth.set(objFound);
      setAuth(objFound);
      return true;
    }
    return false;
  };

  const submit = () => {
    console.log('submit');

    props.signin(userId);
    props.history.push('/');
  };

  const { onInputChange, onFormSubmit, values, errors, isDisabled, message, closeMessage } = useForm(
    inputs,
    checkIfUserExists,
    submit
  );

  return (
    <div className="signin">
      {message && (
        <Message values={values} closeMessage={closeMessage}>
          {message}
        </Message>
      )}
      <form className="form" onSubmit={onFormSubmit} noValidate autoComplete="off">
        <div className="empty"></div>
        <Name name={values.name} error={errors.name} onInputChange={onInputChange} ref={inputs.name} />
        <Email email={values.email} error={errors.email} onInputChange={onInputChange} ref={inputs.email} />
        <Password
          password={values.password}
          error={errors.password}
          onInputChange={onInputChange}
          ref={inputs.password}
        />
        <div className="form-group">
          <button type="submit" disabled={isDisabled ? true : false}>
            SIGNIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
