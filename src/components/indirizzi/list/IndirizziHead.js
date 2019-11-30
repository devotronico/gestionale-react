import React from 'react';

const IndirizziHead = () => {
  return (
    <div className="indirizzi-head row th">
      <div className="col th id">
        <p>id</p>
      </div>
      <div className="col th cliente_id">
        <p>c_id</p>
      </div>
      <div className="col th principale">
        <p>principale</p>
      </div>
      <div className="col th via">
        <p>via</p>
      </div>
      <div className="col th civico">
        <p>civico</p>
      </div>
      <div className="col th cap">
        <p>cap</p>
      </div>
      <div className="col th comune">
        <p>comune</p>
      </div>
      <div className="col th provincia">
        <p>provincia</p>
      </div>
      <div className="col th nazione">
        <p>nazione</p>
      </div>
    </div>
  );
};

export default IndirizziHead;
