import React from 'react'

import { Nav, Navbar, Container } from 'react-bootstrap'


const Header = () => {
  return (
    <header>
      <>

        <Navbar bg="info" variant="dark" expand="lg" fixed="top" collapseOnSelect>
          <Container>

            <img
              alt=""
              src="/Icon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <Navbar.Brand href="/">FurnShop</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className='ms-auto'>

                <Nav.Link href="/Register"><i className='fas fa-user'></i> Register</Nav.Link>

                <Nav.Link href="/Login"><i className='fas fa-user'></i> Log in</Nav.Link>

                <Nav.Link href="/Cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>





              </Nav>
            </Navbar.Collapse>


          </Container>
        </Navbar>
      </>

    </header>
  )
}

export default Header