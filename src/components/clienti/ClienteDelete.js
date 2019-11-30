import React, { useState } from 'react';
import '../../style/clienti/delete.css';
import useFormDelete from './hooks/useFormDelete';

import Message from './control/Message';
import SelectDelete from './control/SelectDelete';
import ButtonDelete from './control/ButtonDelete';

function ClienteDelete(props) {
  const [id, setId] = useState('');
  // on SUBMIT
  const submit = () => {
    const id = document.querySelector('SELECT').value;
    console.log('SELECT id', id);
    props.deleteCliente(id);
    props.history.push('/clienti/list');
  };

  const { values, setValues, isDisabledButton, setIsDisabledButton, message, closeMessage, clickButtonDelete } = useFormDelete(submit);

  return (
    <div className="delete">
      {message && (
        <Message values={values} closeMessage={closeMessage} classMessage="success">
          {message}
        </Message>
      )}
      <form className="form" noValidate>
        <SelectDelete id={id} setId={setId} values={values} setValues={setValues} clienti={props.clienti} setIsDisabledButton={setIsDisabledButton} />
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <div className="field">
            <input type="text" name="nome" id="nome" value={values.nome ? values.nome : ''} disabled readOnly={true} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="field">
            <input type="email" name="email" id="email" value={values.email ? values.email : ''} disabled readOnly={true} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="field">
            <input type="text" name="password" id="password" value={values.password ? values.password : ''} disabled readOnly={true} />
          </div>
        </div>
        <div className="form-group-btn">
          <ButtonDelete isDisabledButton={isDisabledButton} clickButtonDelete={clickButtonDelete}>
            DELETE
          </ButtonDelete>
        </div>
      </form>
    </div>
  );
}

export default ClienteDelete;
