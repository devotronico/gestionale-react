import React from 'react';
import '../../style/clienti/add.css';
import useFormAdd from './hooks/useFormAdd';

import Message from './control/Message';
import Name from './control/Name';
import Email from './control/Email';
import Password from './control/Password';
import ButtonAdd from './control/ButtonAdd';

function ClienteAdd(props) {
  const inputs = {
    name: React.createRef(),
    email: React.createRef(),
    password: React.createRef()
  };

  const valuesNumber = Object.keys(inputs).length;

  const submit = values => {
    console.log('submit');
    props.addCliente(values);
    props.history.push('/clienti/list');
  };

  const {
    values,
    errors,
    isDisabledButton,
    onInputChange,
    clickButtonAdd,
    message,
    classMessage,
    closeMessage
  } = useFormAdd(valuesNumber, inputs, props.clienti, submit);

  return (
    <div className="add">
      {message && (
        <Message
          values={values}
          closeMessage={closeMessage}
          classMessage={classMessage}
        >
          {message}
        </Message>
      )}
      <form className="form" noValidate autoComplete="off">
        <Name
          name={values.name}
          error={errors.name}
          onInputChange={onInputChange}
          ref={inputs.name}
        />
        <Email
          email={values.email}
          error={errors.email}
          onInputChange={onInputChange}
          ref={inputs.email}
        />
        <Password
          password={values.password}
          error={errors.password}
          onInputChange={onInputChange}
          ref={inputs.password}
        />
        <div className="form-group-btn">
          <ButtonAdd
            isDisabledButton={isDisabledButton}
            clickButtonAdd={clickButtonAdd}
          >
            ADD
          </ButtonAdd>
        </div>
      </form>
    </div>
  );
}

export default ClienteAdd;
