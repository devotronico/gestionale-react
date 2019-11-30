import React from 'react';
import '../../style/clienti/add.css';
import useFormAdd from './hooks/useFormAdd';

import Report from './control/Report';
import InputNome from './control/InputNome';
import InputCognome from './control/InputCognome';
import InputEmail from './control/InputEmail';
import InputTelefono from './control/InputTelefono';
import InputCodFiscale from './control/InputCodFiscale';
import InputPassword from './control/InputPassword';
import ButtonAdd from './control/ButtonAdd';
import ButtonNext from './control/ButtonNext';

function ClienteAdd(props) {
  const inputs = {
    nome: React.createRef(),
    cognome: React.createRef(),
    email: React.createRef(),
    tel: React.createRef(),
    password: React.createRef()
  };

  const valuesNumber = Object.keys(inputs).length;

  const submit = values => {
    console.log('submit');
    props.addCliente(values);
    props.history.push('/clienti/list');
  };

  const { step, goNext, values, errors, isDisabledButton, onInputChange, clickButtonAdd, message, classMessage, closeMessage } = useFormAdd(
    valuesNumber,
    inputs,
    props.clienti,
    submit
  );

  return (
    <div className="add">
      {/* {message && (
        <Message values={values} closeMessage={closeMessage} classMessage={classMessage}>
          {message}
        </Message>
      )} */}
      <form className="form" noValidate autoComplete="off">
        {(() => {
          switch (step) {
            case 1:
              return (
                <>
                  <InputNome nome={values.nome} error={errors.nome} onInputChange={onInputChange} ref={inputs.nome} />
                  <InputCognome cognome={values.name} error={errors.name} onInputChange={onInputChange} ref={inputs.name} />
                  <InputEmail email={values.email} error={errors.email} onInputChange={onInputChange} ref={inputs.email} />
                  <ButtonNext isDisabledButton={isDisabledButton} goNext={goNext}>
                    NEXT
                  </ButtonNext>
                </>
              );
            case 2:
              return (
                <>
                  <InputTelefono tel={values.tel} error={errors.tel} onInputChange={onInputChange} ref={inputs.tel} />
                  <InputCodFiscale c_fiscale={values.c_fiscale} error={errors.c_fiscale} onInputChange={onInputChange} ref={inputs.c_fiscale} />
                  <InputPassword password={values.password} error={errors.password} onInputChange={onInputChange} ref={inputs.password} />
                  <ButtonNext isDisabledButton={isDisabledButton} step={step} goNext={goNext}>
                    NEXT
                  </ButtonNext>
                </>
              );
            case 3:
              return (
                <div>
                  <Report />
                  <ButtonAdd isDisabledButton={isDisabledButton} clickButtonAdd={clickButtonAdd}>
                    ADD
                  </ButtonAdd>
                </div>
              );
            case 4:
              return null;
            default:
              return null;
          }
        })()}
      </form>
    </div>
  );
}

export default ClienteAdd;
