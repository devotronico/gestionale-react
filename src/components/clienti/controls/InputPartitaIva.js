import React from 'react';

const InputPartitaIva = React.forwardRef(({ p_iva, error, onInputChange }, ref) => (
  <div className="form-group">
    <label htmlFor="p_iva">Partita Iva</label>
    <div className="field">
      <input
        type="text"
        name="p_iva"
        id="p_iva"
        required
        minLength="11"
        maxLength="11"
        pattern="[0-9]+"
        className={`${error ? 'input-error' : 'input-valid'}`}
        value={p_iva}
        onChange={onInputChange}
        ref={ref}
        autoComplete="p_iva"
      />
      <br />
      {error && <small>{error}</small>}
    </div>
  </div>
));

export default InputPartitaIva;
