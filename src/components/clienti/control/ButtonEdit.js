import React from 'react';
import '../../../style/clienti/button.css';
const Button = ({ isDisabledButton, clickButtonEdit, children }) => {
  return (
    <button
      className="accent"
      disabled={isDisabledButton}
      onClick={clickButtonEdit}
    >
      {children}
    </button>
  );
};

export default Button;
