import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import './app.css';

const App = () => {
  return (
    <Router>

      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomePage} exact />
          <Route path='/product/:id' component={ProductPage} />
        </Container>
      </main>


      <Footer />

    </Router>
  )
}

export default App