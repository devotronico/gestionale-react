import React from 'react';

const InputEmail = React.forwardRef(({ email = '', error, onInputChange }, ref) => (
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <div className="field">
      <input
        type="email"
        name="email"
        id="email"
        required
        minLength="8"
        maxLength="64"
        pattern="\S+@\S+\.[a-z]+"
        className={`${error ? 'input-error' : 'input-valid'}`}
        value={email}
        onChange={onInputChange}
        ref={ref}
        autoComplete="off"
      />
      {error && <small>{error}</small>}
    </div>
  </div>
));

export default InputEmail;
