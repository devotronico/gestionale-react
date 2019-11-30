import React from 'react';
import '../../../style/indirizzi/indirizzi-list.css';
import '../../../style/indirizzi/indirizzi-list-card.css';
import IndirizziHead from './IndirizziHead';
import buildCardUnderRow from '../scripts/buildCardUnderRow';

const IndirizziList = ({ id, indirizzi }) => {
  return (
    <div className="indirizzi-list">
      <IndirizziHead />
      <div className="indirizzi-rows">
        {id && indirizzi.length > 0 ? null : (
          <div className="no-address">
            <p>Nessun indirizzo</p>
          </div>
        )}

        {indirizzi.map(indirizzo => (
          <div
            className={`${
              indirizzo.principale ? 'row td principal' : 'row td'
            }`}
            key={indirizzo.id}
            onClick={buildCardUnderRow}
          >
            <div className="col td id">
              <p>{indirizzo.id}</p>
            </div>
            <div className="col td cliente_id">
              <p>{indirizzo.cliente_id}</p>
            </div>
            <div className="col td principale">
              <p>{indirizzo.principale}</p>
            </div>
            <div className="col td via">
              <p>{indirizzo.via}</p>
            </div>
            <div className="col td civico">
              <p>{indirizzo.civico}</p>
            </div>
            <div className="col td cap">
              <p>{indirizzo.cap}</p>
            </div>
            <div className="col td comune">
              <p>{indirizzo.comune}</p>
            </div>
            <div className="col td provincia">
              <p>{indirizzo.provincia}</p>
            </div>
            <div className="col td nazione">
              <p>{indirizzo.nazione}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndirizziList;
