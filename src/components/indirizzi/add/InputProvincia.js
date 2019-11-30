import React from 'react';

const InputProvincia = React.forwardRef(
  ({ provincia = '', error, onInputChange }, ref) => (
    <div className="form-group">
      <label htmlFor="provincia">Provincia</label>
      <div className="field">
        <input
          type="text"
          name="provincia"
          id="provincia"
          required
          minLength="2"
          maxLength="2"
          pattern="[a-zA-Z]+"
          className={`${error ? 'input-error' : 'input-valid'}`}
          value={provincia}
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

export default InputProvincia;
