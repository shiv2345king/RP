import { useState } from 'react'
import Navbar from './components/Header/Navbar';
import Hero from './components/Header/Hero';
import Footer from './components/Footer/Footer';
import Outlet from './components/Outlet/Outlet';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
