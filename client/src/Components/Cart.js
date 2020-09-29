import React, {useState, useEffect} from 'react'
import {ListGroup, ListGroupItem, Row, Col, Button} from 'reactstrap';
import axios from 'axios';

const Cart = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      axios.get('api/items').then((res) => {
      // handle success
      setProducts(res.data)
    })
  }, []);

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
 
  return(
    <div>
      <ListGroup className="pb-5">
        {products.map(({name, price, image, _id}) => (
          <ListGroupItem key={_id}>
            <Row>
              <Col className="col-12 col-md-2">
                <img style={{width: '100%'}} src={image} alt="the product"/>
              </Col>
              <Col className="col-12 col-md-8">
                <p className="text-muted"><strong>{name}</strong></p>
                <Button
                  className="bg-danger"
                  onClick={() => deleteProduct(_id)}
                >
                  delete
                </Button>
              </Col>
              <Col style={{color: 'black'}}  className="col-12 col-md-2"><strong>${price}</strong></Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
        <p className="text-right">
          Total ({products.length} items): ${totalPrice()}
        </p>
    </div>
  )
}

export default Cart;