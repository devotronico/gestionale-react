import React from 'react';
import '../../../style/clienti/button.css';
const ButtonDelete = ({ isDisabledButton, clickButtonDelete, children }) => {
  return (
    <button className="danger" disabled={isDisabledButton} onClick={clickButtonDelete}>
      {children}
    </button>
  );
};

export default ButtonDelete;
