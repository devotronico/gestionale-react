import { useState, useEffect } from 'react';
import validate from '../utils/validate';
import fixValues from '../utils/fixValues';

const useForm = (valuesNumber, inputs, submit) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [canSubmit, setCanSubmit] = useState(true);
  const [message, setMessage] = useState('');
  const [classMessage, setClassMessage] = useState('');

  const onInputChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: fixValues(name, value) });
    setErrors({ ...errors, [name]: validate(event.target) });
  };

  useEffect(() => {
    if (Object.keys(values).length === valuesNumber) {
      let isError = '';
      for (let key in errors) {
        isError += errors[key];
      }
      isError ? setIsDisabledButton(true) : setIsDisabledButton(false);
    }
  }, [errors]);

  /**
   * Funzione che abilita o disabilita tutti gli elementi input
   * @param {Boolean} isDisabled
   */
  const disableInput = isDisabled => {
    for (let key in inputs) {
      inputs[key].current.disabled = isDisabled;
    }
  };

  const clickButtonAdd = e => {
    console.log(e);
    e.preventDefault();
    console.log('clickButtonAdd 1');
    if (canSubmit && !isDisabledButton) {
      console.log('clickButtonAdd 2');
      disableInput(true); // [b]
      setIsDisabledButton(true); // [c]
      setCanSubmit(false); // [d]
      //  setIsDataExists(clienti.find(cliente => cliente.email === values.email)); // [e]
    }
  };

  useEffect(() => {
    if (!canSubmit) {
      setMessage('Indirizzo Creato');
      setClassMessage('success');
    }
  }, [canSubmit]);

  const confirmToMessage = isConfirm => () => {
    setMessage('');
    if (isConfirm) {
      submit(values);
    } else {
      setIsDisabledButton(false);
      setCanSubmit(true); // [d]
      disableInput(false);
    }
  };

  return {
    values,
    errors,
    isDisabledButton,
    onInputChange,
    clickButtonAdd,
    message,
    classMessage,
    confirmToMessage
  };
};

export default useForm;
