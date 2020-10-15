import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Form
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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

  // variables for mobile hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // logging out
  const submitHandler = (e) => {
    e.preventDefault()
    axios.delete('/api/users/logout').then(res => {
      console.log(res.data)
      window.location.href = res.data.redirect
    }).catch(err => {
      console.log(err)
    })
  }

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
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/cart"><FontAwesomeIcon size="lg" icon={faShoppingCart}/> ({products.length})</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Form onSubmit={submitHandler}>
                  <DropdownItem id="logout-option" type="submit">Log out</DropdownItem>
                </Form>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavBar;