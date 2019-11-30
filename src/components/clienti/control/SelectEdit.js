import React, { useEffect } from 'react';
import '../../../style/clienti/select.css';

const SelectEdit = ({
  id,
  setId,
  values,
  setValues,
  clienti,
  setIsDisabledButton,
  setErrors,
  disableInput
}) => {
  // on SELECT
  const onSelectChange = event => {
    const id = event.target.value ? event.target.value : '';
    setId(id);
  };

  useEffect(() => {
    setErrors({});

    if (id) {
      const cliente = clienti
        .slice(0)
        .reverse()
        .find(cliente => cliente.id === id);
      console.log('cliente', cliente);
      setValues({
        ...values,
        name: cliente.name,
        email: cliente.email,
        password: cliente.password
      });

      disableInput(false); // [!]
    } else {
      console.log('VUOTO');
      setIsDisabledButton(true);
      setValues({});
      disableInput(true);
    }
  }, [id]);

  return (
    <div className="form-group" id="select-group">
      <label>Seleziona</label>
      <div className="field">
        <select value={id} onChange={onSelectChange}>
          <option value="">Seleziona</option>
          {clienti
            .slice(0)
            .reverse()
            .map((cliente, index) => (
              <option key={index} value={cliente.id}>
                {cliente.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default SelectEdit;
