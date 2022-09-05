import {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import AddActivitie from '../components/AddActivitie'
import ActivitiesList from '../components/ActivitiesList'
import useDataUser from '../hooks/useDataUser'
import TooltipP from "../components/TooltipP"
import { AiOutlineBarChart,AiOutlineFileDone } from 'react-icons/ai'

const Account = () => {

  const [userData,setUserData] = useState([]);

  const {user,logout} = UserAuth()
  /* console.log("usuario",user) */

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
  console.log("desde account",tasksArray);
  /* console.log("desde accountDB",usersDB); */
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

        {/* Form activiteies */}
        <div className='flex justfiy-between items-center my-5 py-8 rounded-div'>
          <div className='w-full min-h-[300px]'>
            <h1 className='text-2xl font-bold py-4 text-center'>Registro de Actividades</h1>
            <hr/>
            <AddActivitie
              activitiesArray={tasksArray}
              setTasksArray={setTasksArray}
              userEmail={userEmail}
            />
            <br />
            <hr />
          
            {/* <hr/> */}
            {/* {user=== {} ? <ActivitiesList activitiesArray={tasksArray}/> : <ActivitiesList activitiesArray={fakeData}/>} */}
            {tasksArray && 
              <ActivitiesList 
                activitiesArray={tasksArray}
                setTasksArray={setTasksArray}
                userEmail={userEmail}
              />
            } 
            
            
          </div>
        </div>
      </div>
  )
}

export default Account