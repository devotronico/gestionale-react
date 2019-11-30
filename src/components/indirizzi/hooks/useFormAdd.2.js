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
    setValues({ ...values, [name]: value });
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

  const clickButtonAdd = () => {
    if (canSubmit && !isDisabledButton) {
      // [a]
      setValues(fixValues(values));
      console.log(values);
      disableInput(true); // [b]
      setIsDisabledButton(true); // [c]
      setCanSubmit(false); // [d]
      //  setIsDataExists(clienti.find(cliente => cliente.email === values.email)); // [e]
    }
  };

  useEffect(() => {
    if (!canSubmit) {
      setMessage('Cliente Creato');
      setClassMessage('success');
    }
  }, [canSubmit]);

  const closeMessage = () => {
    disableInput(false);
    setMessage('');
    submit(values);
  };

  return {
    values,
    errors,
    isDisabledButton,
    onInputChange,
    clickButtonAdd,
    message,
    classMessage,
    closeMessage
  };
};

export default useForm;
