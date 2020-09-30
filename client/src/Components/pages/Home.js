import React, {useState, useContext} from 'react';
import ProductList from '../ProductList';
import Pagination from '../Pagination';
import {ProductContext} from '../../ProductContext';

const Home = () => {

  const [products] = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(24);

  // get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <ProductList currentProducts={currentProducts}/>
      <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/>
    </div>
  )
}

export default Home;