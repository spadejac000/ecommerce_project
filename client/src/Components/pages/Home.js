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
    axios.get('https://warm-sands-34549.herokuapp.com/api/users').then((res) => {
      setData(res.data)
      let myId = res.data.id;
      console.log('loggin status: ', res.data)
      axios.post('https://warm-sands-34549.herokuapp.com/api/cart/userid', {id:myId}).then(response => {
        console.log(response)
      })
      if (res.data.loggedIn === false) {
        console.log('hello darkness my old friend')
        console.log('here is the url: ', window.location.href)
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