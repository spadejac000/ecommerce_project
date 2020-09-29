import React, {useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {toast} from 'react-toastify';

toast.configure();

const CheckoutForm = () => {

  const [products, setProducts] = useState([])

  // remove all items from cart after purchase
  const clearCart = () => {
    axios.delete(`api/items/`).then(response => {
      const cartList = []
      setProducts(cartList);
    });
  }

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

  return(
    <div>
      <StripeCheckout
        stripeKey="pk_test_SDgPMwlzPSK2Fo1LNTcCKhYr00pduFRDkx"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={2500}
        name="the dishwasher"
      />
    </div>
  )
}

export default CheckoutForm;