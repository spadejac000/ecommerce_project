import React from 'react';
import Cart from '../Cart';
import CheckoutForm from '../CheckoutForm';
import {Row, Col } from 'reactstrap';

const Checkout = () => {
  return(
    <Row className="mt-5">
      <Col  className="col-12 col-md-10"><Cart/></Col>
      <Col className="col-12 col-md-2"><CheckoutForm/></Col>
    </Row>
  )
}

export default Checkout;