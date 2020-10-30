import React, {useState, useContext, useEffect} from 'react';
import ProductList from '../ProductList';
import Pagination from '../Pagination';
import {ProductContext} from '../../ProductContext';
import axios from 'axios'

const Home = () => {

  const [products] = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(24);
  const [data, setData] = useState("");

  // get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    axios.get('/api/users').then((res) => {
      setData(res.data)
      if (res.data.loggedIn === false) {
        window.location.href = `${window.location.href}login`
      }
    })
  }, [])

  return (
    <div>
      {/* <h1>Hi {data.name}</h1> */}
      <ProductList currentProducts={currentProducts}/>
      <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/>
    </div>
  )
}

export default Home;