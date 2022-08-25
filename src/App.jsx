import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import {ThemeProvider} from './context/ThemeContext'
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Dashboard from './routes/Dashboard';
import Account from './routes/Account';

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <ThemeProvider>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
          <Route path='/dash' element={<Dashboard />} />
        </Routes>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
