import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Marque from './components/Marque'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Marque />
      <AboutUs />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App