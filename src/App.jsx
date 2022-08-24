import { useState } from 'react'
import {ThemeProvider} from './context/ThemeContext'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <ThemeProvider>
      <Navbar/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
