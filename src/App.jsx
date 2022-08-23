import { useState } from 'react'
import {ThemeProvider} from './context/ThemeContext'

import './App.css'

function App() {

  return (
    <ThemeProvider>
      <h1>Hello World !!!</h1>
    </ThemeProvider>
  )
}

export default App
