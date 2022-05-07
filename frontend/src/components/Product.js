import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <a href={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} id="image" />
      </a>
      <Card.Body>
        <Card.Title><h4>{product.name}</h4></Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <hr />
        <Card.Text as='h5'>
          £{product.price}
        </Card.Text>

      </Card.Body>
    </Card>
  )
}

export default Product