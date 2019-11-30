import { useState, useEffect } from 'react';

const useFormDelete = submit => {
  const [values, setValues] = useState({});
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [message, setMessage] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);

  useEffect(() => {
    if (!canSubmit && !message) {
      setValues({});
      setCanSubmit(true);
    }
  }, [message]);

  const clickButtonDelete = event => {
    event.preventDefault();
    if (canSubmit && !isDisabledButton) {
      setIsDisabledButton(true);
      setCanSubmit(false);
      setMessage('Cliente Cancellato');
    }
  };

  const closeMessage = () => {
    setMessage(false);
    submit();
  };

  return {
    values,
    setValues,
    isDisabledButton,
    setIsDisabledButton,
    message,
    closeMessage,
    clickButtonDelete
  };
};

export default useFormDelete;
