import React, {useContext, useState, useEffect} from 'react';
import {ProductContext} from '../ProductContext';
import {InCartNumContext} from '../InCartNumContext';
import { Row, Col, Card, CardText,
  CardTitle, Button, Alert, Fade } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import PropTypes from 'prop-types';

const Item = (props) => {

  Alert.propTypes = {
    className: PropTypes.string,
    closeClassName: PropTypes.string,
    color: PropTypes.string, // default: 'success'
    isOpen: PropTypes.bool,  // default: true
    toggle: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fade: PropTypes.bool, // default: true
    // Controls the transition of the alert fading in and out
    // See Fade for more details
    transition: PropTypes.shape(Fade.propTypes),
  }

  // alert state
  const [fadeIn, setFadeIn] = useState(false);
  const toggle = () => setFadeIn(!fadeIn);
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  const itemId = props.match.params.id;
  const [products] = useContext(ProductContext);
  const [productsInCart, setProductsInCart] = useContext(InCartNumContext);
  let theUserId = '';

  useEffect(() => {
    axios.get('/api/users').then((res) => {
      theUserId = res.data.id;
    })
  }, [])

  const addToCart = () => {
    setProductsInCart(productsInCart + 1)

    let theName = '';
    let thePrice = '';
    let theImage = '';

    //data to send to server and add to database when clicking the 'add to cart' button
    const theData = () => {
      products.map(product => {
        if(product.id == itemId) {
          const {name, price, image} = product;
          theName = name;
          thePrice = price;
          theImage = image;
          return {theName, thePrice, theImage};
        }
      })
    }

    theData();
    let name = theName
    let price = thePrice
    let image = theImage
    let data = {name, price, image, theUserId}

    axios.post('/api/cart', data).then(res => {
      console.log(res.data)
      // setProductsInCart(productsInCart + 1)
    })
    
    setFadeIn(true)
  }
  

  // retieve item information from context based on itemId
  return(
    <div>
      <Fade in={fadeIn} tag="h5" className="mt-3">
        <Alert color="success" isOpen={visible} toggle={onDismiss}>
          Item added to cart
        </Alert>
      </Fade>
      {products.map(product => {
        if(product.id == itemId) {
          return(
            <Row>
              <Col className="col-12 col-md-4"><img style={{maxWidth: '100%'}} src={product.image} alt="the product"/></Col>
              <Col className="col-12 col-md-5"><h1>{product.name}</h1><hr style={{background: 'white'}}/><p className="text-warning"><strong>Price: ${product.price}</strong></p>
                <hr style={{background: 'white'}}/>
                {product.description}
              </Col>
              <Col className="col-12 col-md-3">
                <Card body inverse color="dark">
                  <CardTitle className="text-warning"><strong>${product.price}</strong></CardTitle>
                  <CardText>Purchase within 24 hours to recieve a rebate...No refunds</CardText>
                  <Button color="secondary" onClick={addToCart}><FontAwesomeIcon icon={faShoppingCart}/> Add To Cart</Button>
                </Card>
              </Col>
            </Row>
          )
        }
      })}
    </div>
  )
}

export default Item;