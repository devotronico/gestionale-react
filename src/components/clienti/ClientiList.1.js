import React, { useState } from 'react';
import '../../style/clienti/list.css';
import ClientiRow from './ClientiRow';
import Pagination from './Pagination';

// << < 1 2 3 > >>
const ClienteList = ({ clienti }) => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  // const [items, setItems] = useState([]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentClienti = clienti.slice(indexOfFirstPost, indexOfLastPost);

  //Cambiare pagina
  // const paginate = pageNumber => {
  //   setCurrentPage(pageNumber);
  // };

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
