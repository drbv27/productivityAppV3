import React from 'react'
import { Link } from "react-router-dom";
import ActivitieTimer from '../components/activitieTimer';
import Stopwatch from '../components/StopWatch';


const Dashboard = () => {
  return (
    <div className='max-w-[1140px] mx-auto'>
        <div className='flex justify-between items-center my-1 py-4 rounded-div'>
          <div>
            <h1 className='text-2xl font-bold'>Account</h1>
            <div>
              <p>Welcome:</p>
            </div>
          </div>
          <div>
            <Link to='/account'>Registro</Link>
            <Link to='/dash'>Dashboard</Link>
          </div>
          <div>
            <button
             /*  onClick={handleLogout} */
              className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'
            >
              Salir
            </button>
          </div>
        </div>
        <div>
          <h2>Probando</h2>
          <Stopwatch/>
          <h2>Probando</h2>
        </div>
        
      </div>
  )
}

export default Dashboard