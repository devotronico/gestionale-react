import { useState, useEffect } from 'react';
import validate from '../utils/validate';
import Auth from '../../../auth/auth';

const useForm = (inputs, users, submit, mode) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [classMessage, setClassMessage] = useState('');
  const [canSubmit, setCanSubmit] = useState(true);
  const [isUserExists, setIsUserExists] = useState(false);
  const [userId, setUserId] = useState(null);

  const onInputChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validate(event.target) });
  };

  useEffect(() => {
    if (Object.keys(values).length === 3) {
      let isError = '';
      for (let key in errors) {
        isError += errors[key];
      }
      isError ? setIsDisabled(true) : setIsDisabled(false);
    }
  }, [values]);

  const handleIsDisabledInput = bool => {
    for (let key in inputs) {
      inputs[key].current.disabled = bool;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    if (canSubmit && !isDisabled) {
      handleIsDisabledInput(true);
      setIsDisabled(true);
      setCanSubmit(false);
      setIsUserExists(users.find(user => user.email === values.email));
    }
  };

  const handleAlreadyExists = (mess, classMess, canSubmit = false) => {
    setMessage(mess);
    setClassMessage(classMess);
    if (canSubmit) {
      setCanSubmit(true);
    }
  };

  useEffect(() => {
    if (!canSubmit) {
      if (!isUserExists) {
        switch (mode) {
          case 'signin':
            handleAlreadyExists('Questo Utente Non Esiste', 'error', true);
            break;
          case 'signup':
            handleAlreadyExists('Utente Registrato', 'success');
            Auth.set(values);
            break;
          default:
            break;
        }
      } else {
        switch (mode) {
          case 'signin':
            handleAlreadyExists('Utente Autenticato', 'success');
            setUserId(isUserExists.id);
            Auth.set(isUserExists);
            break;
          case 'signup':
            handleAlreadyExists('Questo Utente Già Esiste', 'error', true);
            break;
          default:
            break;
        }
      }
    }
  }, [canSubmit, isUserExists]);

  const closeMessage = () => {
    setMessage(false);
    switch (mode) {
      case 'signin':
        isUserExists ? submit() : handleIsDisabledInput(false);
        break;
      case 'signup':
        isUserExists ? handleIsDisabledInput(false) : submit();
        break;
      default:
        break;
    }
  };

  return {
    onInputChange,
    onFormSubmit,
    values,
    setValues,
    errors,
    isDisabled,
    message,
    closeMessage,
    userId,
    classMessage
  };
};

export default useForm;
