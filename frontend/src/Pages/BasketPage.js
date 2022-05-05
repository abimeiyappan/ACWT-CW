import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Row, Col, ListGroup, Image, Button, Form, Card } from 'react-bootstrap'
import { addToBasket, removeFromBasket } from '../actions/basketActions'

export const BasketPage = ({ match, location, history }) => {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const basket = useSelector((state) => state.basket)

    const { basketItems } = basket

    useEffect(() => {
        if (productId) {
            dispatch(addToBasket(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromBasketHandler = (id) => {
        dispatch(removeFromBasket(id))
    }

    const checkoutHandler = () => {
        history.push('/login?reditect=shipping')
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Basket</h1>
                {basketItems.length === 0 ? (
                    <Message>
                        Your basket is empty<Link to='/'>Go back</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flash'>
                        {basketItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as='select'
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToBasket(item.product, Number(e.target.value)))}
                                        >
                                            {[...Array(item.stock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            )
                                            )}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' variant='light' onClick={() => removeFromBasketHandler(item.product)}>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}

                    </ListGroup>
                )}

            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flash'>
                        <ListGroup.Item>
                            <h3>Subtotal ({basketItems.reduce((acc, item) => acc + item.qty, 0)}) items</h3>
                            ${basketItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' disabled={basketItems.length === 0} onClick={checkoutHandler}>
                                Proceed to checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>

            </Col>

        </Row>
    )
}
