import React from 'react';

const InputCodFiscale = React.forwardRef(({ c_fiscale = '', error, onInputChange }, ref) => (
  <div className="form-group">
    <label htmlFor="c_fiscale">Codice Fiscale</label>
    <div className="field">
      <input
        type="text"
        name="c_fiscale"
        id="c_fiscale"
        required
        minLength="16"
        maxLength="16"
        pattern="[a-z]{6}[0-9]{2}[a-z][0-9]{2}[a-z][0-9]{3}[a-z]"
        className={`${error ? 'input-error' : 'input-valid'}`}
        value={c_fiscale}
        onChange={onInputChange}
        ref={ref}
        autoComplete="off"
      />
      <br />
      {error && <small>{error}</small>}
    </div>
  </div>
));

export default InputCodFiscale;
