import React from 'react';

const InputName = React.forwardRef(
  ({ name = '', error, onInputChange }, ref) => (
    <div className="form-group">
      <label htmlFor="name" className={`${name ? 'active' : 'inactive'}`}>
        Name
      </label>
      <div className="field">
        <input
          type="text"
          name="name"
          id="name"
          required
          minLength="3"
          maxLength="10"
          pattern="[a-zA-Z]+"
          className={`${error ? 'input-error' : 'input-valid'}`}
          value={name}
          onChange={onInputChange}
          ref={ref}
          autoComplete="off"
        />
        {error && <small>{error}</small>}
      </div>
    </div>
  )
);

export default InputName;
