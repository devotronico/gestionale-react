import React from 'react';
import '../../../style/clienti/button.css';
const ButtonNext = ({ isDisabledButton, children, goNext }) => {
  return (
    <div className="form-group-btn">
      <button className="accent" disabled={isDisabledButton} onClick={goNext}>
        {children}
      </button>
    </div>
  );
};

export default ButtonNext;
