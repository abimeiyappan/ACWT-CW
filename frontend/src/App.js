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
          <Route path='/basket/:id?' component={BasketPage} />
        </Container>
      </main>
      <Footer />


    </Router>
  )
}

export default App
