import React, { useState, useEffect } from 'react';
import '../../../style/clienti/select.css';

const SelectEdit = ({ values, setValues, clienti, setIsDisabledButton, inputs, setErrors }) => {
  const [id, setId] = useState('');

  // on SELECT
  const onSelectChange = event => {
    const id = event.target.value ? +event.target.value : '';
    setId(id);
  };

  useEffect(() => {
    setErrors({});
    const handleIsDisabledInput = isDisabled => {
      for (let key in inputs) {
        inputs[key].current.disabled = isDisabled;
      }
    };

    if (Number.isInteger(id)) {
      const cliente = clienti.find(cliente => cliente.id === id);
      setValues({
        ...values,
        name: cliente.name,
        email: cliente.email,
        password: cliente.password
      });
      handleIsDisabledInput(false);
    } else {
      setIsDisabledButton(true);
      setValues({});
      handleIsDisabledInput(true);
    }
  }, [id]);

  return (
    <div className="form-group" id="select-group">
      <label>Seleziona</label>
      <div className="field">
        <select value={id} onChange={onSelectChange}>
          <option value="">Seleziona</option>
          {clienti.map(cliente => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectEdit;
