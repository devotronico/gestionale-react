import React from 'react';

const InputCivico = React.forwardRef(
  ({ civico = '', error, onInputChange }, ref) => (
    <div className="form-group">
      <label htmlFor="civico">Civico</label>
      <div className="field">
        <input
          type="text"
          name="civico"
          id="civico"
          required
          minLength="1"
          maxLength="8"
          pattern="[a-zA-Z0-9\s]+"
          className={`${error ? 'input-error' : 'input-valid'}`}
          value={civico}
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

export default InputCivico;
