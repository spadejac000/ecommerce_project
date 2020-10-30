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
  const [loggedIn, setLoggedIn] = useState(false)
  const [data, setData] = useState('')

  useEffect(() => {
      axios.get('api/items').then((res) => {
      // handle success
      setProducts(res.data)
      let afterLastSlashUrl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
      if(afterLastSlashUrl === 'login' || afterLastSlashUrl === 'register') {
        setLoggedIn(false)
      } else {
        setLoggedIn(true)
      }

      axios.get('/api/users').then((res) => {
        setData(res.data)
      })
    })
  }, []);

  // variables for mobile hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // logging out
  const submitHandler = (e) => {
    e.preventDefault()
    axios.delete('/api/users/logout').then(res => {
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
              <NavLink href="/cart"><FontAwesomeIcon size="lg" icon={faShoppingCart}/> ({products.length})</NavLink>
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