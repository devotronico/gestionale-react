import React from 'react';

const InputNazione = React.forwardRef(
  ({ nazione = '', error, onInputChange }, ref) => (
    <div className="form-group">
      <label htmlFor="nazione">Nazione</label>
      <div className="field">
        <input
          type="text"
          name="nazione"
          id="nazione"
          required
          minLength="2"
          maxLength="2"
          pattern="[a-zA-Z]+"
          className={`${error ? 'input-error' : 'input-valid'}`}
          value={nazione}
          onChange={onInputChange}
          ref={ref}
          autoComplete="off"
        />
        <br />
        {error && <small>{error}</small>}
      </div>
    </div>
  )
);

export default InputNazione;
