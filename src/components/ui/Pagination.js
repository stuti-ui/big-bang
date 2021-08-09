import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
    <div className='center'>
      <div className='pagination'>
        {pageNumbers.map(number => (
          <ul key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </ul>
        ))}
      </div>
      </div>
    </nav>
  );
};

export default Pagination;