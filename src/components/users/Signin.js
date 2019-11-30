import React from 'react';
import '../../style/users/signin.css';
import '../../style/users/input.css';
import useSignin from './hooks/useSignin';
import { useHistory } from 'react-router-dom';

import Message from './controls/Message';
import Name from './controls/Name';
import Email from './controls/Email';
import Password from './controls/Password';
import Button from './controls/Button';

function Signin(props) {
  const history = useHistory();

  const inputs = {
    name: React.createRef(),
    email: React.createRef(),
    password: React.createRef()
  };

  const submit = userId => {
    console.log('signin');
    props.signin(userId);
    history.push('/');
  };

  const {
    onInputChange,
    onFormSubmit,
    values,
    errors,
    isDisabledButton,
    message,
    confirmToMessage,
    classMessage
  } = useSignin(inputs, props.users, submit);

  return (
    <div className="signin">
      {message && (
        <Message
          values={values}
          confirmToMessage={confirmToMessage}
          classMessage={classMessage}
        >
          {message}
        </Message>
      )}
      <form
        className="form"
        onSubmit={onFormSubmit}
        noValidate
        autoComplete="off"
      >
        <Name
          name={values.name}
          error={errors.name}
          onInputChange={onInputChange}
          ref={inputs.name}
        />
        <Email
          email={values.email}
          error={errors.email}
          onInputChange={onInputChange}
          ref={inputs.email}
        />
        <Password
          password={values.password}
          error={errors.password}
          onInputChange={onInputChange}
          ref={inputs.password}
        />
        <Button isDisabledButton={isDisabledButton}>SIGNIN</Button>
      </form>
    </div>
  );
}

export default Signin;
