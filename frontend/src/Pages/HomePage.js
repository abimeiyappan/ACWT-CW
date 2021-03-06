import React, { useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions.js'
import Message from '../components/Message'
import Loader from '../components/Loader'

const HomePage = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Browse through our latest products!</h1>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
        (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={6} med={5} lg={4} xl={3}>

                <Product product={product} />


              </Col>
            )
            )
            }
          </Row>
        )}

    </>
  )
}

export default HomePage