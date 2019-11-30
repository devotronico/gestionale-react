import React from 'react';

const InputVia = React.forwardRef(({ via = '', error, onInputChange }, ref) => (
  <div className="form-group">
    <label htmlFor="via">Via</label>
    <div className="field">
      <input
        type="text"
        name="via"
        id="via"
        required
        minLength="2"
        maxLength="100"
        pattern="[a-zA-Z\s]+"
        className={`${error ? 'input-error' : 'input-valid'}`}
        value={via}
        onChange={onInputChange}
        ref={ref}
        autoComplete="off"
      />
      <br />
      {error && <small>{error}</small>}
    </div>
  </div>
));

export default InputVia;
