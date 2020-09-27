import React, {useState, useEffect} from 'react';

const Pagination = ({productsPerPage, totalProducts, paginate}) => {

  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="row justify-content-center align-self-center pb-5 pt-5">
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="#!" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )

}

export default Pagination;