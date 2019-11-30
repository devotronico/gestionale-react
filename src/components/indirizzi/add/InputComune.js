import React from 'react';

const InputComune = React.forwardRef(
  ({ comune = '', error, onInputChange }, ref) => (
    <div className="form-group">
      <label htmlFor="comune">Comune</label>
      <div className="field">
        <input
          type="text"
          name="comune"
          id="comune"
          required
          minLength="2"
          maxLength="100"
          pattern="[a-zA-Z\s]+"
          className={`${error ? 'input-error' : 'input-valid'}`}
          value={comune}
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

export default InputComune;
