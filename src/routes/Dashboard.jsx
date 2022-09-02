import {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'
import GraphWithDateSelector from '../components/GraphWithDateSelector';

import useDataUser from '../hooks/useDataUser'



const Dashboard = () => {
  const [userData,setUserData] = useState([]);
  const {user,logout} = UserAuth()
  let newUser;
  useEffect(()=>{
    new Promise((resolve,reject)=>{
        if(user){
            resolve(
              newUser = user
            )
        }else{
            reject("no se pudo dash")
        }
    }).then((response)=>{

      setUserData(response)
      
      
    })
  },[user])

const {tasksArray,userEmail,setTasksArray} =useDataUser(userData)

/* console.log("desde dash",tasksArray) */
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
        {/*contenido*/ }
        <div>
          <GraphWithDateSelector tasksArray={tasksArray}/>
          <h2>Probando</h2>
         
          <h2>Probando</h2>
        </div>
        
      </div>
  )
}

export default Dashboard