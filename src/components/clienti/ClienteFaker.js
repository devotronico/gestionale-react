import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { addMultiClienti, truncateClienti } from '../../redux/index';
import '../../style/clienti/faker.css';
import faker from 'faker';

const mapStateToProps = state => ({
  clienti: state.clienti
});

faker.locale = 'it';

export const ClienteFaker = props => {
  const [num, setNum] = useState(0);

  const inputRef = useRef(0);

  useEffect(() => {
    if (Number.isInteger(num)) {
      if (num >= 0) {
        if (num > 1000) {
          setNum(1000);
        }
      } else {
        setNum(0);
      }
    } else {
      setNum(0);
    }
    return () => {};
  }, [num]);

  const addFake = () => {
    if (num) {
      let values = [];
      for (let i = 0; i < num; i++) {
        const obj = {
          id: faker.random.uuid(),
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: faker.internet.password()
        };
        // values = [...values, obj];
        values.push(obj);
      }
      console.log(values);
      props.addMultiClienti(values);
    }
  };

  const handleInputValue = () => {
    setNum(+inputRef.current.value + num);
    inputRef.current.value = '';
  };

  return (
    <div className="faker">
      <div className="row">
        <input type="number" ref={inputRef} />
        <button className="accent" onClick={handleInputValue}>
          +
        </button>
      </div>
      <div className="row btn-group">
        <button className="accent" onClick={() => setNum(num + 1)}>
          + 1
        </button>
        <button className="accent" onClick={() => setNum(num + 10)}>
          + 10
        </button>
        <button className="accent" onClick={() => setNum(num + 100)}>
          + 100
        </button>
      </div>
      <div className="row btn-group">
        <button className="accent" onClick={() => setNum(num - 1)}>
          - 1
        </button>
        <button className="accent" onClick={() => setNum(num - 10)}>
          - 10
        </button>
        <button className="accent" onClick={() => setNum(num - 100)}>
          - 100
        </button>
      </div>
      <div className="row">
        {/* <p>{num}</p> */}
        <button className="accent" onClick={addFake}>
          Add {num} Clienti
        </button>
      </div>
      <div className="row">
        <button className="accent" onClick={() => setNum(0)}>
          Reset
        </button>
      </div>
      <div className="row">
        <button className="danger" onClick={props.truncateClienti}>
          Truncate
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, { addMultiClienti, truncateClienti })(
  ClienteFaker
);
