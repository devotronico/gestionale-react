import { useState, useEffect } from 'react';
import validate from '../utils/validate';
import fixValues from '../utils/fixValues';

const useSignup = (inputs, users, submit) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [message, setMessage] = useState('');
  const [classMessage, setClassMessage] = useState('');
  const [canSubmit, setCanSubmit] = useState(true);
  const [isUserExists, setIsUserExists] = useState(true);

  const onInputChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: fixValues(name, value) });
    setErrors({ ...errors, [name]: validate(event.target) });
  };

  useEffect(() => {
    if (Object.keys(values).length === 3) {
      let isError = '';
      for (let key in errors) {
        isError += errors[key];
      }
      isError ? setIsDisabledButton(true) : setIsDisabledButton(false);
    }
  }, [errors]);

  const handleIsDisabledInput = bool => {
    for (let key in inputs) {
      inputs[key].current.disabled = bool;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    if (canSubmit && !isDisabledButton) {
      handleIsDisabledInput(true);
      setIsDisabledButton(true);
      setCanSubmit(false);
      setIsUserExists(users.find(user => user.email === values.email));
    }
  };

  useEffect(() => {
    if (!canSubmit) {
      if (!isUserExists) {
        setMessage('Utente Registrato');
        setClassMessage('success');

        if (users.length === 0) {
          setValues({ ...values, role: 'developer' });
        } else if (users.length === 1) {
          setValues({ ...values, role: 'admin' });
        } else {
          setValues({ ...values, role: 'user' });
        }
      } else {
        setMessage('Questo Utente Già Esiste');
        setClassMessage('error');
      }
    }
  }, [canSubmit]);

  const closeMessage = () => {
    setMessage(false);
    isUserExists ? handleIsDisabledInput(false) : submit();
  };

  return {
    onInputChange,
    onFormSubmit,
    values,
    errors,
    isDisabledButton,
    message,
    closeMessage,
    classMessage
  };
};

export default useSignup;
