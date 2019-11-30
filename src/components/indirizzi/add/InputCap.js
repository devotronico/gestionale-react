import React from 'react';

const InputCap = React.forwardRef(({ cap = '', error, onInputChange }, ref) => (
  <div className="form-group">
    <label htmlFor="cap">Cap</label>
    <div className="field">
      <input
        type="text"
        name="cap"
        id="cap"
        required
        minLength="5"
        maxLength="5"
        pattern="[0-9]+"
        className={`${error ? 'input-error' : 'input-valid'}`}
        value={cap}
        onChange={onInputChange}
        ref={ref}
        autoComplete="off"
      />
      <br />
      {error && <small>{error}</small>}
    </div>
  </div>
));

export default InputCap;
