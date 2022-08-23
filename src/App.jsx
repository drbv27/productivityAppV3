import { useState } from 'react'
import {ThemeProvider} from './context/ThemeContext'

import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <ThemeProvider>
      <Navbar/>
    </ThemeProvider>
  )
}

export default App
