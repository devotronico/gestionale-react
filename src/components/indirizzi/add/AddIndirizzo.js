import React from 'react';
import useFormAdd from '../hooks/useFormAdd';
import '../../../style/indirizzi/add.css';

import Message from '../controls/Message';
import Via from './InputVia';
import Civico from './InputCivico';
import Cap from './InputCap';
import Comune from './InputComune';
import Provincia from './InputProvincia';
import Nazione from './InputNazione';
import ButtonAdd from '../controls/ButtonAdd';

function AddIndirizzo(props) {
  const inputs = {
    via: React.createRef(),
    civico: React.createRef(),
    cap: React.createRef(),
    comune: React.createRef(),
    provincia: React.createRef(),
    nazione: React.createRef()
  };
  const valuesNumber = Object.keys(inputs).length;

  const submit = values => {
    console.log('submit', values);
    values = { ...values, cliente_id: props.clienteId };
    props.addIndirizzo(values);
    props.setModeActived('list');
  };

  const {
    values,
    errors,
    isDisabledButton,
    onInputChange,
    clickButtonAdd,
    message,
    classMessage,
    confirmToMessage
  } = useFormAdd(valuesNumber, inputs, submit);

  return (
    <div className="add">
      {message && (
        <Message
          values={values}
          confirmToMessage={confirmToMessage}
          classMessage={classMessage}
        >
          {message}
        </Message>
      )}
      <form className="form" noValidate>
        <Via
          via={values.via}
          error={errors.via}
          onInputChange={onInputChange}
          ref={inputs.via}
        />
        <Civico
          civico={values.civico}
          error={errors.civico}
          onInputChange={onInputChange}
          ref={inputs.civico}
        />
        <Cap
          cap={values.cap}
          error={errors.cap}
          onInputChange={onInputChange}
          ref={inputs.cap}
        />
        <Comune
          comune={values.comune}
          error={errors.comune}
          onInputChange={onInputChange}
          ref={inputs.comune}
        />
        <Provincia
          provincia={values.provincia}
          error={errors.provincia}
          onInputChange={onInputChange}
          ref={inputs.provincia}
        />
        <Nazione
          nazione={values.nazione}
          error={errors.nazione}
          onInputChange={onInputChange}
          ref={inputs.nazione}
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

export default AddIndirizzo;
