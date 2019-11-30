import React from 'react';

const Textarea = React.forwardRef(
  ({ message = '', error, onInputChange }, ref) => (
    <div className="form-group">
      <label htmlFor="name" className={`${message ? 'active' : 'inactive'}`}>
        Message
      </label>
      <div className="field">
        <textarea
          type="text"
          name="message"
          id="message"
          required
          minLength="3"
          maxLength="100"
          pattern="[a-zA-Z0-9]+"
          className={`${error ? 'input-error' : 'input-valid'}`}
          value={message}
          onChange={onInputChange}
          ref={ref}
          autoComplete="off"
        ></textarea>
        {error && <small>{error}</small>}
      </div>
    </div>
  )
);

export default Textarea;
