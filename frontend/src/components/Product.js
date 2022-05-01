import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-5 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numOfReviews} reviews`}
          />

        </Card.Text>
        <Card.Text as='h5'>
          £{product.price}
        </Card.Text>
        <Button className='align-bottom primary'>Add to Cart</Button>
      </Card.Body>
    </Card >
  )
}

export default Product