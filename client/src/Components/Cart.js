// working code when each user did not have an individual cart
import React, {useState, useEffect, useContext} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {ListGroup, ListGroupItem, Row, Col, Button} from 'reactstrap';
import {InCartNumContext} from '../InCartNumContext';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [cartId, setCartId] = useState('');
  const [productsInCart, setProductsInCart] = useContext(InCartNumContext);


  useEffect(() => {
    axios.get('/api/cart').then(res => {
      for(let i = 0; i < res.data.carts.length; i++) {
        if(res.data.userId === res.data.carts[i].userId) {
          setCart(res.data.carts[i].products)
          setCartId(res.data.carts[i]._id)
        }
      }
    })
  }, []);

  // remove all items from cart after purchase
  const clearCart = (id) => {
    axios.delete(`/api/cart/cartcontent/hello/${id}`).then(response => {
      console.log('here is the cart: ', response.data)
      const cartList = []
      setCart(cartList);
    });
  }

  // remove all items from cart before purchase
  const deleteAllItemsInCart = (id) => {
    axios.delete(`/api/cart/cartcontent/hello/${id}`).then(response => {
      console.log('here is the cart: ', response.data)
      const cartList = []
      setCart(cartList);
      setProductsInCart(0)
    });
  }

  // handles stripe token
  const handleToken = async (token) => {
    const response = await axios.post('/api/cart/checkout', {
      token
    });
    const {status} = response.data
    if(status === 'success') {
      console.log('this was a successful purchase')
      clearCart()
      window.location.href = response.data.redirect
    } else {
      console.log('this did not work', response.data)
    }
  }

  // delete item from database function
  const deleteProduct = (productId) => {
    axios.delete(`/api/cart/${productId}`).then(response => {
      setProductsInCart(productsInCart - 1)
      const cartList = cart.filter(product => product._id !== productId);
      setCart(cartList);
    });
  }

  // adding all the price of the items in the shopping cart together
  let total = 0
  const totalPrice = () => {
    for(let i = 0; i < cart.length; i++) {
      total = parseFloat(total) + parseFloat(cart[i].price)
    }
    total = Math.round( total * 1e2 ) / 1e2;
    total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return total;
  }
 
  if(cart.length === 0) {
    return(
      <div>
        <h1>Cart is empty</h1>
        <Link to="/" className="btn btn-primary"><FontAwesomeIcon
        icon={faArrowRight}/> Back Home</Link>
      </div>
    )
  } else {
    return(
      <Row>
        <Col className="col-12 col-md-9">
        <ListGroup className="pb-5">
          {cart.map(({name, price, image, _id}) => (
            <ListGroupItem className="bg-dark text-white" key={_id}>
              <Row>
                <Col className="col-12 col-md-2">
                  <img style={{width: '100%'}} src={image} alt="the product"/>
                </Col>
                <Col className="col-12 col-md-8">
                  <p className="text-white"><strong>{name}</strong></p>
                  <Button
                    className="bg-danger"
                    onClick={() => deleteProduct(_id)}
                  >
                    delete
                  </Button>
                </Col>
                <Col style={{color: 'white'}}  className="col-12 col-md-2 text-right"><strong>${price}</strong></Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
        <hr className="bg-light"/>
        <p className="text-right">
          Total ({cart.length} items): ${totalPrice()}
        </p>
        </Col>
        <Col className="col-12 col-md-3">
          <div className="card bg-dark p-3 text-white">
          <p>
            Total ({cart.length} items): ${total}
          </p>
          <StripeCheckout
            stripeKey="pk_test_SDgPMwlzPSK2Fo1LNTcCKhYr00pduFRDkx"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={total * 100}
            name="Products"
          />
          <button className="btn btn-danger mt-3" onClick={() => {deleteAllItemsInCart(cartId)}}>
            Delete All Items
          </button>
          </div>
        </Col>
      </Row>
    )
  }
  
}

export default Cart;