import React, { useState, useEffect } from 'react';
import '../../style/clienti/list.css';
import ClientiRow from './ClientiRow';
import Pagination from './Pagination';

const ClienteList = ({ clienti }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const [currentClienti, setCurrentClienti] = useState(
    clienti.slice(0, postsPerPage)
  );

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCurrentClienti(clienti.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage]);

  return (
    <div className="list">
      <ul className="list-group">
        {currentClienti
          .slice(0)
          .reverse()
          .map(cliente => (
            <ClientiRow
              key={cliente.id}
              id={cliente.id}
              name={cliente.name}
              email={cliente.email}
              password={cliente.password}
            ></ClientiRow>
          ))}
      </ul>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={clienti.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ClienteList;
