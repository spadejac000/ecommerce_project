import React, { useState } from 'react';
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
import {Link} from 'react-router-dom';

const NavBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
    <Navbar color="dark" dark expand="md" style={{marginBottom: "5rem"}}>
      <NavbarBrand href="/">ReactCommerce</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
        </Nav>
        <Link to="/cart"><FontAwesomeIcon className="text-white" size="lg" icon={faShoppingCart}/></Link>
      </Collapse>
    </Navbar>
  )
}

export default NavBar;