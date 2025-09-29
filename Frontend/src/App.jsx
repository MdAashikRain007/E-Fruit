import React from 'react'
import HomePage from './Home Page/HomePage'
import ProductPage from './Product Page/ProductPage'
import FooterPage from './Footer Page/FooterPage'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import User from './Profile Page/User'
import CartPage from './Cart Page/CartPage'


function App() {
  return (


    <Router>
      <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<User />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <ProductPage />
        <FooterPage />
      </>
    </Router>



  )
}

export default App