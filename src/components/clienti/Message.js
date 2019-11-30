import React from 'react';

const Message = ({ setMessage, values, children }) => {
  return (
    <div className="message">
      <div className="message-box">
        <p>{children}</p>
        <ul>
          <li>
            <span className="key">nome:</span>
            <span className="value">{values.nome}</span>
          </li>
          <li>
            <span className="key">email:</span>
            <span className="value">{values.email}</span>
          </li>
          <li>
            <span className="key">password:</span>
            <span className="value">{values.password}</span>
          </li>
        </ul>
        <button onClick={() => setMessage(false)}>CLOSE</button>
      </div>
    </div>
  );
};

export default Message;
