import React from 'react';

const InputCognome = React.forwardRef(
  ({ cognome, error, onInputChange }, ref) => (
    <div className="form-group">
      <label htmlFor="cognome">Cognome</label>
      <div className="field">
        <input
          type="text"
          name="cognome"
          id="cognome"
          required
          minLength="2"
          maxLength="50"
          pattern="[\sa-zA-ZàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚ]+"
          className={`${error ? 'input-error' : 'input-valid'}`}
          value={cognome}
          onChange={onInputChange}
          ref={ref}
          autoComplete="cognome"
        />
        <br />
        {error && <small>{error}</small>}
      </div>
    </div>
  )
);

export default InputCognome;
