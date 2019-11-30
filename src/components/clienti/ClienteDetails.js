import React from 'react';
import '../../style/clienti/details.css';
import { useLocation, useHistory } from 'react-router-dom';
import useFormDetails from './hooks/useFormDetails';

import Message from './control/Message';
import InputNome from './control/InputNome';
import InputEmail from './control/InputEmail';
import InputPassword from './control/InputPassword';
import ButtonEdit from './control/ButtonEdit';
import ButtonDelete from './control/ButtonDelete';

export default function ClienteDetails(props) {
  let history = useHistory();
  const { id } = useLocation().state;
  // console.log('id', id);
  const editableValues = (({ name, email, password }) => ({
    name,
    email,
    password
  }))(useLocation().state);

  const inputs = {
    name: React.createRef(),
    email: React.createRef(),
    password: React.createRef()
  };

  // on SUBMIT
  const submit = (type, values) => {
    switch (type) {
      case 'edit':
        values = { ...values, id: id };
        props.editCliente(values);
        break;
      case 'delete':
        console.log('submit id', id);
        props.deleteCliente(id);
        break;

      default:
        break;
    }
    history.push('/clienti/list');
  };

  const { values, errors, isDisabledButton, onInputChange, clickButtonEdit, clickButtonDelete, message, closeMessage, classMessage } = useFormDetails(
    inputs,
    props.clienti,
    submit,
    id,
    editableValues
  );

  return (
    <div className="details">
      {message && (
        <Message values={values} closeMessage={closeMessage} classMessage={classMessage}>
          {message}
        </Message>
      )}
      <form className="form" noValidate autoComplete="off">
        <InputNome name={values.name} error={errors.name} onInputChange={onInputChange} ref={inputs.name} />
        <InputEmail email={values.email} error={errors.email} onInputChange={onInputChange} ref={inputs.email} />
        <InputPassword password={values.password} error={errors.password} onInputChange={onInputChange} ref={inputs.password} />
        <div className="form-group-btn">
          <ButtonEdit isDisabledButton={isDisabledButton} clickButtonEdit={clickButtonEdit}>
            EDIT
          </ButtonEdit>
          <ButtonDelete isDisabledButton={isDisabledButton} clickButtonDelete={clickButtonDelete}>
            CANC
          </ButtonDelete>
        </div>
      </form>
    </div>
  );
}
