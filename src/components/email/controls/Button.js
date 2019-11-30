import React from 'react';
import '../../../style/common/button.css';
const Button = ({ isDisabledButton, children }) => {
  return (
    <div className="form-group">
      <button type="submit" disabled={isDisabledButton}>
        {children}
      </button>
    </div>
  );
};

export default Button;
