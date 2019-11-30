import React from 'react';

const InputPassword = React.forwardRef(
  ({ password = '', error, onInputChange }, ref) => (
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <div className="field">
        <input
          type="password"
          name="password"
          id="password"
          required
          minLength="6"
          maxLength="12"
          pattern=".+"
          className={`${error ? 'input-error' : 'input-valid'}`}
          value={password}
          onChange={onInputChange}
          ref={ref}
          autoComplete="current-password"
        />
        {error && <small>{error}</small>}
      </div>
    </div>
  )
);

export default InputPassword;
