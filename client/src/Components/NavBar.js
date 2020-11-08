import React, { useState, useEffect, useContext } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, Form, Badge
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {InCartNumContext} from '../InCartNumContext';

const NavBar = () => {
  const [productsInCart, setProductsInCart] = useContext(InCartNumContext);
  const [loggedIn, setLoggedIn] = useState(true)
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/api/cart').then((res) => {
      axios.get('http://localhost:5000/api/users').then((response) => {
        setData(response.data)
        for(let i = 0; i < res.data.carts.length; i++) {
          if(response.data.id === res.data.carts[i].userId) {
            setProductsInCart(res.data.carts[i].products.length)
          }
        }
      })
      let afterLastSlashUrl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
      if(afterLastSlashUrl === 'login' || afterLastSlashUrl === 'register') {
        setLoggedIn(false)
      } else {
        setLoggedIn(true)
      }
    })
  }, []);

  // variables for mobile hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // logging out
  const submitHandler = (e) => {
    e.preventDefault()
    axios.delete('http://localhost:5000/api/users/logout').then(res => {
      console.log(res.data)
      window.location.href = res.data.redirect
      setLoggedIn(false)
    }).catch(err => {
      console.log(err)
    })
  }

  if(loggedIn === true) {
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
              <NavLink>Welcome, {data.name}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart"><FontAwesomeIcon size="lg" icon={faShoppingCart}/>  <Badge color="danger">{productsInCart}</Badge></NavLink>
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
  } else {

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
              <NavLink href="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )

  }

}

export default NavBar;