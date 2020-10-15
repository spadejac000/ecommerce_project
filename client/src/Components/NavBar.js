import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import axios from 'axios'

const NavBar = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      axios.get('api/items').then((res) => {
      // handle success
      setProducts(res.data)
    })
  }, [products]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
    <Navbar 
      color="dark" 
      dark 
      expand="md" 
      style={{marginBottom: "5rem"}}
    >
      <NavbarBrand href="/">ReactCommerce</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
        </Nav>
        <Link to="/cart" className="text-white"><FontAwesomeIcon className="text-white" size="lg" icon={faShoppingCart}/> ({products.length})</Link>
        <Link><FontAwesomeIcon className="text-white ml-4" size="lg" icon={faCog}/></Link>
      </Collapse>
    </Navbar>
  )
}

export default NavBar;