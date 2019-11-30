import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
// import ClientiDetails from './ClientiDetails';

const ClientiRow = ({ id, name, email, password }) => {
  let match = useRouteMatch();
  //   console.log(match); // match.path = clienti/list
  return (
    <li>
      <Link
        to={{
          pathname: `${match.url}/${id}`,
          state: { id, name, email, password }
        }}
      >
        <span>{id}</span>
        <span>{name}</span>
        <span>{email}</span>
        <span>{password}</span>
      </Link>
    </li>
  );
};

export default ClientiRow;
