import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* content */}
      <HomePage />

      {/* footer */}
      <Footer />
     
    </div>
  )
}

export default App