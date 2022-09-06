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
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminProtected from './components/AdminProtected';
import PruebaUsers from './routes/PruebaUsers';

function App() {

  return (
    <ThemeProvider>
      <AuthContextProvider>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />

          <Route path='/dash' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path='/usersP' element={
            <AdminProtected>
              <PruebaUsers />
            </AdminProtected>
          } />
        </Routes>
        <Footer/>
      </AuthContextProvider>

      

    </ThemeProvider>
  )
}

export default App
