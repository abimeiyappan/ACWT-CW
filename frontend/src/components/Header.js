import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { logout } from '../actions/userActions'


const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <>
        <br />
        <Navbar bg="info" variant="dark" expand="lg" fixed="top" collapseOnSelect>
          <Container>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-cart-fill" viewBox="0 0 20 20">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <Navbar.Brand href="/"> FurnShop</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className='ms-auto'>
                <Nav.Link href="/basket">
                  <i className="fa-solid fa-basket-shopping"></i> Basket
                </Nav.Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id='username'>


                    <NavDropdown.Item href='/profile'>

                      Profile

                    </NavDropdown.Item>


                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>

                  </NavDropdown>
                ) : (
                  <Nav.Link href="/Login">
                    <i className="fa-solid fa-user"></i> Log in
                  </Nav.Link>
                )}

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <br />
      </>
    </header >
  )
}

export default Header