import React from 'react';
import '../../style/Pizza.css';

function Pizza(props) {
  return (
    <div className="content pizza">
      <h2>Pizza</h2>
      <h3>numero di pizze: {props.count}</h3>
      <button onClick={props.addPizza}>add</button>
    </div>
  );
}

export default Pizza;
