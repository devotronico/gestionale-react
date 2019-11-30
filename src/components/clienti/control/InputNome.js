import React from 'react';

const InputNome = React.forwardRef(({ nome = '', error, onInputChange }, ref) => (
  <div className="form-group">
    <label htmlFor="name">Nome</label>
    <div className="field">
      <input
        type="text"
        name="nome"
        id="nome"
        required
        minLength="3"
        maxLength="10"
        pattern="[a-zA-Z]+"
        className={`${error ? 'input-error' : 'input-valid'}`}
        value={nome}
        onChange={onInputChange}
        ref={ref}
        autoComplete="off"
      />
      {error && <small>{error}</small>}
    </div>
  </div>
));

export default InputNome;
