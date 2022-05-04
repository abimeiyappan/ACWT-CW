import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

const Header = () => {
  return (
    <header>
      <>
        <br />
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
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                <Nav.Link href="/Login"><i className='fas fa-user'></i> Login</Nav.Link>
                <Nav.Link href="/Register"><i className='fas fa-user'></i> Register</Nav.Link>
                <Nav.Link href="/Basket"><i className='fas fa-shopping-cart'></i>Basket</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <br />
      </>
    </header>
  )
}

export default Header