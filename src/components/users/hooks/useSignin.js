import { useState, useEffect } from 'react';
import validate from '../utils/validate';
import fixValues from '../utils/fixValues';

const useSignin = (inputs, users, submit) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [message, setMessage] = useState('');
  const [classMessage, setClassMessage] = useState('');
  const [canSubmit, setCanSubmit] = useState(true);
  const [isUserExists, setIsUserExists] = useState(false);

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

  const disableInput = bool => {
    for (let key in inputs) {
      inputs[key].current.disabled = bool;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    if (canSubmit && !isDisabledButton) {
      disableInput(true);
      setIsDisabledButton(true);
      setCanSubmit(false);
      setIsUserExists(
        users.find(
          user =>
            user.email === values.email && user.password === values.password
        )
      );
    }
  };

  useEffect(() => {
    if (!canSubmit) {
      if (!isUserExists) {
        setMessage('Accesso Negato');
        setClassMessage('error');
      } else {
        setMessage('Utente Autenticato');
        setClassMessage('success');
      }
    }
  }, [canSubmit]);

  const confirmToMessage = isConfirm => () => {
    setMessage('');
    if (isConfirm) {
      submit(isUserExists.id);
    } else {
      setIsDisabledButton(false);
      setCanSubmit(true);
      disableInput(false);
    }
  };

  return {
    onInputChange,
    onFormSubmit,
    values,
    errors,
    isDisabledButton,
    message,
    confirmToMessage,
    classMessage
  };
};

export default useSignin;
