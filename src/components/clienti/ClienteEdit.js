import React, { useState } from 'react';
import '../../style/clienti/edit.css';
import useFormEdit from './hooks/useFormEdit';

import Message from './control/Message';
import SelectEdit from './control/SelectEdit';
import InputNome from './control/InputNome';
import InputEmail from './control/InputEmail';
import InputPassword from './control/InputPassword';
import ButtonEdit from './control/ButtonEdit';

function ClienteEdit(props) {
  const [id, setId] = useState('');

  const inputs = {
    name: React.createRef(),
    email: React.createRef(),
    password: React.createRef()
  };

  const valuesNumber = Object.keys(inputs).length;

  // on SUBMIT
  const submit = values => {
    values = { id: id, ...values };
    props.editCliente(values);
    props.history.push('/clienti/list');
  };

  const {
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
  } = useFormEdit(id, valuesNumber, inputs, props.clienti, submit);

  return (
    <div className="edit">
      {message && (
        <Message values={values} classMessage={classMessage} closeMessage={closeMessage}>
          {message}
        </Message>
      )}
      <form className="form" noValidate autoComplete="off">
        <SelectEdit
          id={id}
          setId={setId}
          values={values}
          setValues={setValues}
          clienti={props.clienti}
          setIsDisabledButton={setIsDisabledButton}
          setErrors={setErrors}
          disableInput={disableInput}
        />
        <InputNome name={values.name} error={errors.name} onInputChange={onInputChange} ref={inputs.name} />
        <InputEmail email={values.email} error={errors.email} onInputChange={onInputChange} ref={inputs.email} />
        <InputPassword password={values.password} error={errors.password} onInputChange={onInputChange} ref={inputs.password} />
        <div className="form-group-btn">
          <ButtonEdit isDisabledButton={isDisabledButton} clickButtonEdit={clickButtonEdit}>
            EDIT
          </ButtonEdit>
        </div>
      </form>
    </div>
  );
}

export default ClienteEdit;
