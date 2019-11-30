import React from 'react';
import '../../style/clienti/pagination.css';
const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage
}) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage) + 1; i++) {
    pageNumbers.push(i);
  }

  const range = 1;
  const lastPage = pageNumbers.length;
  let previousPages = currentPage - range > 0 ? currentPage - range : 1;
  let nextPages =
    currentPage + range <= lastPage ? currentPage + range : lastPage;

  if (currentPage === 1) {
    nextPages++;
  } else if (currentPage === lastPage) {
    previousPages--;
  }

  const navButtons = pageNumbers.slice(previousPages - 1, nextPages);

  return (
    <div className="pagination-container">
      <p className="pagination-info">
        <span>totale clienti: {totalPosts}</span>{' '}
        <span>
          Page: {currentPage}/{lastPage}
        </span>
      </p>
      <ul className="pagination">
        <li key={1} className="page-item">
          <a
            onClick={() => setCurrentPage(1)}
            href="#!"
            className="page-link first-page"
          >
            {'\u21e4'}
          </a>
        </li>

        {navButtons.map(number => (
          <li key={number} className="page-item">
            <a
              onClick={() => setCurrentPage(number)}
              href="#!"
              className={
                number === currentPage
                  ? 'page-link selected'
                  : 'page-link unselected'
              }
            >
              {number}
            </a>
          </li>
        ))}
        <li key={lastPage} className="page-item">
          <a
            onClick={() => setCurrentPage(lastPage)}
            href="#!"
            className="page-link last-page"
          >
            {'\u21E5'}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
