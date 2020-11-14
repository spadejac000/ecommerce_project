import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {ListGroup, ListGroupItem, Row, Col, Button} from 'reactstrap';
import {InCartNumContext} from '../InCartNumContext';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

class Cart extends Component {
  state = {
    cart: [],
    userId: ''
  }

  static contextType = InCartNumContext;

  componentDidMount() {
    axios.get('/api/cart').then(res => {
      for(let i = 0; i < res.data.carts.length; i++) {
        if(res.data.userId === res.data.carts[i].userId) {
          this.setState({cart: res.data.carts[i].products})
        }
      }
    })
  }

  render() {
    // remove all items from cart after purchase
    const clearCart = () => {
      axios.delete(`/api/items/`).then(response => {
        const cartList = []
        this.setState({cart: cartList});
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
        console.log('this did not work')
      }
    }

    // delete item from database function
    const deleteProduct = (productId) => {
      let theUserId = this.state.userId
      axios.delete(`/api/cart/${productId}`, {id: theUserId}).then(response => {
        this.context[0] = this.context[0] - 1
        const cartList = this.state.cart.filter(product => product._id !== productId);
        this.setState({cart: cartList});
      });
    }

    // adding all the price of the items in the shopping cart together
    let total = 0
    const totalPrice = () => {
      for(let i = 0; i < this.state.cart.length; i++) {
        total = parseFloat(total) + parseFloat(this.state.cart[i].price)
      }
      return total.toFixed(2)
    }

    if(this.state.cart.length === 0) {
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
              {this.state.cart.map(({name, price, image, _id}) => (
                <ListGroupItem className="bg-dark text-white" key={_id}>
                  <Row>
                    <Col className="col-12 col-md-2">
                      <img style={{width: '100%'}} src={image} alt="the product" />
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
              Total ({this.state.cart.length} items): ${totalPrice()}
            </p>
          </Col>
          <Col className="col-12 col-md-3">
            <div className="card bg-dark p-3">
            <p>
              Total ({this.state.cart.length} items): ${total}
            </p>
            <StripeCheckout
              stripeKey="pk_test_SDgPMwlzPSK2Fo1LNTcCKhYr00pduFRDkx"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={total * 100}
              name="Products"
            />
            </div>
          </Col>
        </Row>
      )
    }
  }
}

export default Cart;