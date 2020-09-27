import React, {useContext} from 'react';
import {ProductContext} from '../ProductContext';
import { Row, Col, Card, CardText,
  CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Item = (props) => {

  const itemId = props.match.params.id;
  const [products] = useContext(ProductContext);

  const addToCart = () => {

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
    let data = {name, price, image}

    axios.post('/api/items', data).then(res => {
      console.log(res.data)
    })
    
  }
  

  // retieve item information from context based on itemId
  return(
    <div>
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
                <Card body inverse color="info">
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