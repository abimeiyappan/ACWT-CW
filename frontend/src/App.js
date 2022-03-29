import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'

function App () {
  return (
    <>
    <Header />
    <Container>
    <main className='py-4'>
      <h1>Welcome to FurnShop!</h1>
    </main>
    </Container>
    
    <Footer />
    </>
  )
}

export default App
