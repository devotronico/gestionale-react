import React from 'react';
import '../../../style/users/message.css';

const Message = ({ values, closeMessage, classMessage, children }) => {
  return (
    <div className="message">
      <div className={`message-box ${classMessage}`}>
        <p>{children}</p>
        <ul>
          {Object.keys(values).map(key => (
            <li key={key}>
              <span className="key">{key}:</span>
              <span className="value">
                {key !== 'password'
                  ? values[key]
                  : values[key].replace(/./g, '*')}
              </span>
            </li>
          ))}
        </ul>
        <button onClick={closeMessage}>CLOSE</button>
      </div>
    </div>
  );
};

export default Message;
