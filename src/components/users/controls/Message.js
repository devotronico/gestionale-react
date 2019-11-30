import React from 'react';
import '../../../style/common/message.css';

const Message = ({ values, confirmToMessage, classMessage, children }) => {
  return (
    <div className="message">
      <div className={`message-box ${classMessage}`}>
        <h3>{children}</h3>
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
        <button onClick={confirmToMessage(false)}>CLOSE</button>
        {classMessage === 'success' && (
          <button onClick={confirmToMessage(true)}>CONFIRM</button>
        )}
      </div>
    </div>
  );
};

export default Message;
