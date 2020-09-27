import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {toast} from 'react-toastify';
import { useHistory } from "react-router-dom";

toast.configure();

const CheckoutForm = () => {

  // const onSuccessfulCheckout = () => Router.push("/success")
  let history = useHistory();

  const handleToken = async (token) => {
    const response = await axios.post('/api/items/checkout', {
      token
    });
    const {status} = response.data
    if(status === 'success') {
      console.log('this was a successful purchase')
      history.push('/success')
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