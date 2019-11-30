import { useState, useEffect } from 'react';
import validate from '../utils/validate';

const useFormDetails = (
  inputs,
  clienti,
  submit,
  clienteId,
  editableValues = {}
) => {
  const [values, setValues] = useState(editableValues);
  const [errors, setErrors] = useState({});
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [canSubmit, setCanSubmit] = useState(true);
  const [isUserExists, setIsUserExists] = useState(false);
  const [message, setMessage] = useState('');
  const [classMessage, setClassMessage] = useState('');
  const [clientiMode, setClientiMode] = useState('edit');

  const onInputChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validate(event.target) });
  };

  useEffect(() => {
    // if (Object.keys(values).length === valuesNumber) {
    // console.log('valuesNumber', valuesNumber);
    let isError = '';
    for (let key in errors) {
      isError += errors[key];
    }
    isError ? setIsDisabledButton(true) : setIsDisabledButton(false);
    // }
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
   */
  const clickButtonEdit = () => {
    if (canSubmit && !isDisabledButton) {
      // [a]
      // fixValues();
      disableInput(true); // [b]
      setIsDisabledButton(true); // [c]
      setCanSubmit(false); // [d]
      setIsUserExists(
        clienti.find(
          cliente => cliente.id !== clienteId && cliente.email === values.email
        )
      ); // [e]
    }
  };

  const clickButtonDelete = () => {
    setClientiMode('delete');
    disableInput(true); // [b]
    setIsDisabledButton(true); // [c]
    setCanSubmit(false); // [d]
    setIsUserExists(true);
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
        switch (clientiMode) {
          case 'edit':
            handleAlreadyExists('Cliente Modificato', 'success');
            break;
          case 'delete':
            handleAlreadyExists('Cliente NON Cancellato', 'error');
            break;
          default:
            break;
        }
      } else {
        switch (clientiMode) {
          case 'edit':
            handleAlreadyExists(
              'Un Cliente con la stessa email già esiste',
              'error',
              true
            );
            break;
          case 'delete':
            handleAlreadyExists('Cliente Cancellato', 'success');
            break;
          default:
            break;
        }
      }
    }
  }, [isUserExists]);

  const closeMessage = () => {
    setMessage(false);
    if (clientiMode === 'delete') {
      submit('delete', values);
    } else {
      isUserExists ? disableInput(false) : submit(clientiMode, values);
    }
  };

  return {
    onInputChange,
    clickButtonEdit,
    clickButtonDelete,
    values,
    errors,
    isDisabledButton,
    message,
    closeMessage,
    classMessage
  };
};

export default useFormDetails;
