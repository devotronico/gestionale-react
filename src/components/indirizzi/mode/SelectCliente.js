import React, { useEffect } from 'react';

const SelectCliente = ({
  clienti,
  id,
  setId,
  setIsDisabled,
  setModeActived,
  indirizzi,
  setIndirizziFiltered
}) => {
  // on SELECT
  const onSelectChange = event => {
    const id = event.target.value ? event.target.value : '';
    setId(id);
  };

  useEffect(() => {
    if (id) {
      setIsDisabled(false);
      setModeActived('list');
      const resIndirizzi = indirizzi.filter(
        indirizzo => indirizzo.cliente_id === id
      );
      setIndirizziFiltered(resIndirizzi);

      const oldCardRow = document.getElementById('card');
      if (oldCardRow) {
        oldCardRow.remove();
      }
    } else {
      setIsDisabled(true);
      setModeActived('');
    }
  }, [id]);

  return (
    <div className="form-group">
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

export default SelectCliente;
