import { useState, useEffect } from 'react';
import validate from '../utils/validate';

const useFormEdit = (id, valuesNumber, inputs, clienti, submit) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [canSubmit, setCanSubmit] = useState(true);
  const [isDataExists, setIsDataExists] = useState(false);
  const [message, setMessage] = useState(false);
  const [classMessage, setClassMessage] = useState('');

  /**
   * Funzione che abilita o disabilita tutti gli elementi input
   * @param {Boolean} isDisabled
   */
  const disableInput = isDisabled => {
    for (let key in inputs) {
      inputs[key].current.disabled = isDisabled;
    }
  };

  const onInputChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validate(event.target) });
  };

  useEffect(() => {
    if (Object.keys(values).length === valuesNumber) {
      let isError = '';
      for (var key in errors) {
        isError += errors[key];
      }
      isError ? setIsDisabledButton(true) : setIsDisabledButton(false);
    }
  }, [values]);

  const clickButtonEdit = event => {
    event.preventDefault();
    console.log(values);
    if (canSubmit && !isDisabledButton) {
      disableInput(true);
      setIsDisabledButton(true);
      setCanSubmit(false);
      setIsDataExists(
        clienti.find(
          cliente => cliente.id !== id && cliente.email === values.email
        )
      ); // [e]
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
    console.log('isDataExists', isDataExists);
    if (!canSubmit) {
      if (!isDataExists) {
        console.log('false');
        handleAlreadyExists('Cliente Modificato', 'success');
      } else {
        console.log('true');
        handleAlreadyExists(
          'Un Cliente con la stessa email già esiste',
          'error',
          true
        );
      }
    }
  }, [isDataExists]);

  const closeMessage = () => {
    disableInput(false);
    setMessage('');
    if (!isDataExists) {
      console.log('submit');
      submit(values);
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    isDisabledButton,
    setIsDisabledButton,
    onInputChange,
    clickButtonEdit,
    message,
    classMessage,
    closeMessage,
    disableInput
  };
};

export default useFormEdit;
