import React, { useEffect } from 'react';

const SelectMode = ({
  indirizzi,
  id,
  isDisabled,
  modeActived,
  setModeActived,
  setIndirizziFiltered
}) => {
  const setMode = () => {
    modeActived === 'add' ? setModeActived('list') : setModeActived('add');
  };

  useEffect(() => {
    if (modeActived === 'list') {
      const resIndirizzi = indirizzi.filter(
        indirizzo => indirizzo.cliente_id === id
      );
      setIndirizziFiltered(resIndirizzi);
    }
  }, [modeActived]);

  return (
    <>
      {isDisabled ? (
        <button className="btn-mode" disabled>
          -
        </button>
      ) : modeActived === 'list' ? (
        <button className="btn-mode" onClick={setMode}>
          add
        </button>
      ) : (
        <button className="btn-mode" onClick={setMode}>
          list
        </button>
      )}
    </>
  );
};

export default SelectMode;
