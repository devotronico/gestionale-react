import React, { useState } from 'react';
import { connect } from 'react-redux';

import '../../style/indirizzi/indirizzi.css';
import '../../style/indirizzi/mode.css';

import { addIndirizzo } from '../../redux/index';
import SelectCliente from './mode/SelectCliente';
import SelectMode from './mode/SelectMode';
import AddIndirizzo from './add/AddIndirizzo';

import IndirizziList from './list/IndirizziList';

const Indirizzi = props => {
  const [modeActived, setModeActived] = useState('');
  const [id, setId] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [indirizziFiltered, setIndirizziFiltered] = useState([]);

  return (
    <>
      <div className="mode">
        <SelectCliente
          clienti={props.clienti}
          id={id}
          setId={setId}
          setIsDisabled={setIsDisabled}
          setModeActived={setModeActived}
          indirizzi={props.indirizzi}
          setIndirizziFiltered={setIndirizziFiltered}
        />
        <SelectMode
          clienti={props.clienti}
          id={id}
          isDisabled={isDisabled}
          modeActived={modeActived}
          setModeActived={setModeActived}
          indirizzi={props.indirizzi}
          setIndirizziFiltered={setIndirizziFiltered}
        />
      </div>
      {modeActived === 'add' && (
        <AddIndirizzo
          clienteId={id}
          addIndirizzo={props.addIndirizzo}
          setModeActived={setModeActived}
        />
      )}
      {modeActived === 'list' && indirizziFiltered.length > 0 ? (
        <IndirizziList indirizzi={indirizziFiltered} />
      ) : id ? (
        <div className="no-address">
          <p>Nessun indirizzo</p>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  clienti: state.clienti,
  indirizzi: state.indirizzi
});

export default connect(mapStateToProps, { addIndirizzo })(Indirizzi);
