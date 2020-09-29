import React, {useState, useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {ListGroup, ListGroupItem, Row, Col, Button} from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Cart = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      axios.get('api/items').then((res) => {
      // handle success
      setProducts(res.data)
    })
  }, []);

  // remove all items from cart after purchase
  const clearCart = () => {
    axios.delete(`api/items/`).then(response => {
      const cartList = []
      setProducts(cartList);
    });
  }

  // handles stripe token
  const handleToken = async (token) => {
    const response = await axios.post('/api/items/checkout', {
      token
    });
    const {status} = response.data
    if(status === 'success') {
      console.log('this was a successful purchase')
      clearCart()
      window.location.href = response.data.redirect
    } else {
      console.log('poooop. this did not work')
    }
  }

  // delete item from database function
  const deleteProduct = (productId) => {
    axios.delete(`api/items/${productId}`).then(response => {
      const cartList = products.filter(product => product._id !== productId);
      setProducts(cartList);
    });
  }

  // adding all the price of the items in the shopping cart together
  const totalPrice = () => {
    let total = 0
    for(let i = 0; i < products.length; i++) {
      total = parseFloat(total) + parseFloat(products[i].price)
    }
    return total
  }
 
  if(products.length === 0) {
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
        <Col className="col-12 col-md-10">
        <ListGroup className="pb-5">
          {products.map(({name, price, image, _id}) => (
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
                <Col style={{color: 'white'}}  className="col-12 col-md-2"><strong>${price}</strong></Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
        <hr className="bg-light"/>
        <p className="text-right">
          Total ({products.length} items): ${totalPrice()}
        </p>
        </Col>
        <Col className="col-12 col-md-2">
          <StripeCheckout
            stripeKey="pk_test_SDgPMwlzPSK2Fo1LNTcCKhYr00pduFRDkx"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={2500}
            name="the dishwasher"
          />
        </Col>
      </Row>
    )
  }
  
}

export default Cart;