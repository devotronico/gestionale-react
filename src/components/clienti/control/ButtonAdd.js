import React from 'react';
import '../../../style/clienti/button.css';
const ButtonAdd = ({ isDisabledButton, children, clickButtonAdd }) => {
  return (
    <div className="form-group-btn">
      <button className="accent" disabled={isDisabledButton} onClick={clickButtonAdd}>
        {children}
      </button>
    </div>
  );
};

export default ButtonAdd;
