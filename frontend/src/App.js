import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomePage from './Pages/HomePage'
import './app.css';

function App () {
  return (
    <>
    <Header />
    <Container>
    <main className='py-4'>
      <HomePage />
    </main>
    </Container>
    
    <Footer />
    </>
  )
}

export default App
