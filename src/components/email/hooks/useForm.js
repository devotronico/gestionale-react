import { useState, useEffect } from 'react';
import validate from '../utils/validate';
import fixValues from '../utils/fixValues';

const useForm = inputs => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  // const [message, setMessage] = useState('');
  // const [classMessage, setClassMessage] = useState('');
  // const [canSubmit, setCanSubmit] = useState(true);
  // const [isUserExists, setIsUserExists] = useState(false);

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

  return {
    onInputChange,
    values,
    errors,
    isDisabledButton
  };
};

export default useForm;
