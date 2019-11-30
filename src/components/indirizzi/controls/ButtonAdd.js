import React from 'react';
import '../../../style/common/button.css';
import '../../../style/common/message.css';
const ButtonAdd = ({ isDisabledButton, children, clickButtonAdd }) => {
  return (
    <button
      className="accent"
      disabled={isDisabledButton}
      onClick={clickButtonAdd}
    >
      {children}
    </button>
  );
};

export default ButtonAdd;
