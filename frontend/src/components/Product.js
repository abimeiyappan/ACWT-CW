import React from 'react'
import { Card, Button, Nav } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <a href={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </a>
      <Card.Body>
        <Card.Title><h4>{product.name}</h4></Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text as='div'>
          <div className='my-3'>
            <i class="fa-solid fa-star"></i>{product.rating} ({product.numReviews})
          </div>
        </Card.Text>
        <Card.Text as='h5'>
          £{product.price}
        </Card.Text>
        <Button className='align-bottom primary'>Add to Basket</Button>
      </Card.Body>
    </Card>
  )
}

export default Product