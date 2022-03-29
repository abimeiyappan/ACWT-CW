import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center pr-3'>
                    Copyright &copy; FurnShop
                </Col>
            </Row>
        </Container>


    </footer>
  )
}

export default Footer