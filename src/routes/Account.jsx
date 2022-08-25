import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Account = () => {

  const{user,logout} = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('You are logout');
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='max-w-[1140px] mx-auto'>
        <div className='flex justify-between items-center my-1 py-4 rounded-div'>
          <div>
            <h1 className='text-2xl font-bold'>Account</h1>
            <div>
              <p>Welcome: {user && user.email}</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleLogout}
              className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'
            >
              Salir
            </button>
          </div>
        </div>
        <div className='flex justfiy-between items-center my-12 py-8 rounded-div'>
          <div className='w-full min-h-[300px]'>
            <h1 className='text-2xl font-bold py-4'>Watch List</h1>
            
          </div>
        </div>
      </div>
  )
}

export default Account