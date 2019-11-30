import { useState, useEffect } from 'react';
import validate from '../utils/validate';

const useFormDetails = (valuesNumber, inputs, clienti, submit) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [canSubmit, setCanSubmit] = useState(true);
  const [isDataExists, setIsDataExists] = useState(false);
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
  }, [values]);

  /**
   * Funzione che abilita o disabilita tutti gli elementi input
   * @param {Boolean} isDisabled
   */
  const disableInput = isDisabled => {
    for (let key in inputs) {
      inputs[key].current.disabled = isDisabled;
    }
  };

  /**
   * [a] Se si puo fare il submit del form e il bottone non è disabilitato
   * [b] disabilita gli elementi input
   * [c] disabilita il bottone del form
   * [c] disabilita la possibilità di fare di nuovo il submit del form
   * [e] cerca un cliente con id diverso ma con email uguale,
   *     Se lo trova ritorna l'oggetto del cliente trovato es: {id: 0, name: "Ryu", email: "ryu@mail.it", password: "123456"}
   *     altrimenti ritorna undefined
   * @param {*} event
   */
  const clickButtonAdd = event => {
    if (canSubmit && !isDisabledButton) {
      // [a]
      disableInput(true); // [b]
      setIsDisabledButton(true); // [c]
      setCanSubmit(false); // [d]
      setIsDataExists(clienti.find(cliente => cliente.email === values.email)); // [e]
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
      if (!isDataExists) {
        handleAlreadyExists('Cliente Creato', 'success');
      } else {
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
      submit(values);
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
    closeMessage
  };
};

export default useFormDetails;
