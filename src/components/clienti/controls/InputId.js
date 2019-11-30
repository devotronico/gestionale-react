import React from 'react';

const InputId = React.forwardRef(({ id, error, onInputChange }, ref) => (
  <div className="form-group">
    <label htmlFor="id">Id</label>
    <div className="field">
      <input
        type="text"
        name="name"
        id="id"
        readOnly={true}
        minLength="3"
        maxLength="10"
        pattern="[a-zA-Z]+"
        className={`${error ? 'input-error' : 'input-valid'}`}
        value={id}
        onChange={onInputChange}
        ref={ref}
        autoComplete="id"
      />
      <br />
      {error && <small>{error}</small>}
    </div>
  </div>
));

export default InputId;
