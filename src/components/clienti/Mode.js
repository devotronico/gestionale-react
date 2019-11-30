import React from 'react';
import '../../style/clienti/mode.css';
import { NavLink } from 'react-router-dom';

const Mode = () => {
  return (
    <div className="mode">
      <NavLink to="/clienti/add" aria-current="true" activeClassName="selected">
        ADD
      </NavLink>
      <NavLink
        to="/clienti/list"
        aria-current="true"
        activeClassName="selected"
      >
        LIST
      </NavLink>
      <NavLink to="/clienti/edit" activeClassName="selected">
        EDIT
      </NavLink>
      <NavLink to="/clienti/delete" activeClassName="selected">
        DELETE
      </NavLink>
      <NavLink
        to="/clienti/faker"
        aria-current="true"
        activeClassName="selected"
      >
        FAKER
      </NavLink>
    </div>
  );
};

export default Mode;
