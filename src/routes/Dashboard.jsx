import {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'
import GraphWithDateSelector from '../components/GraphWithDateSelector';
import { AiOutlineBarChart,AiOutlineFileDone } from 'react-icons/ai'
import TooltipP from "../components/TooltipP"

import useDataUser from '../hooks/useDataUser'



const Dashboard = () => {
  const [userData,setUserData] = useState([]);
  const {user,logout} = UserAuth()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('You are logout');
    } catch (error) {
      console.log(error.message)
    }
  }

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

        {/*contenido*/ }
        <div className='mt-10'>
          <GraphWithDateSelector tasksArray={tasksArray}/>
        </div>
        
      </div>
  )
}

export default Dashboard