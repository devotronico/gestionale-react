import React from 'react';

const InputTelefono = React.forwardRef(({ tel = '', error, onInputChange }, ref) => (
  <div className="form-group">
    <label htmlFor="telefono">Telefono</label>
    <div className="field">
      <input
        type="text"
        name="tel"
        id="tel"
        required
        minLength="10"
        maxLength="10"
        pattern="[0-9]+"
        className={`${error ? 'input-error' : 'input-valid'}`}
        value={tel}
        onChange={onInputChange}
        ref={ref}
        autoComplete="off"
      />
      <br />
      {error && <small>{error}</small>}
    </div>
  </div>
));

export default InputTelefono;
