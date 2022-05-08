import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import { BasketPage } from './Pages/BasketPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import ProfilePage from './Pages/ProfilePage'
import ShippingPage from './Pages/ShippingPage'
import PaymentPage from './Pages/PaymentPage'
import PlaceOrderPage from './Pages/PlaceOrderPage'
import OrderPage from './Pages/OrderPage'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          <Route exact path='/' component={HomePage} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/basket/:id?' component={BasketPage} />
          <Route path='/shipping' component={ShippingPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/placeorder' component={PlaceOrderPage} />
          <Route path='/order' component={OrderPage} />
        </Container>
      </main>
      <Footer />


    </Router>
  )
}

export default App
