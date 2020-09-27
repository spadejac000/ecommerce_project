import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Success = () => {
  return(
    <div>
      <h1>Thank you for your purchase!</h1>
      <Link to="/" className="btn btn-success"><FontAwesomeIcon
      icon={faArrowRight}/> Back Home</Link>
    </div>
  )
}

export default Success;