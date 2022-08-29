import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import AddActivitie from '../components/AddActivitie'
import ActivitiesList from '../components/ActivitiesList'
import useDataUser from '../hooks/useDataUser'

const Account = () => {

  const [userData,setUserData] = useState([]);
  const fakeData = [
    {
      id:1,
      dateMade:"28-08-2022",
      activitieStarted:"8:00",
      activitieFinished:"9:00",
      Macroprocess:"Gerencia",
      Process:"Gobierno",
      Subprocess:"Asamblea General",
      description:"Acompañar asamblea",
      activitieDuration:"1"
    },
    {
      id:2,
      dateMade:"28-08-2022",
      activitieStarted:"9:00",
      activitieFinished:"10:00",
      Macroprocess:"Ingeniería",
      Process:"Investigacion aplicada y desarrollo",
      Subprocess:"Desarrollo de Software",
      description:"Estados software productividad",
      activitieDuration:"1"
    },
    {
      id:3,
      dateMade:"28-08-2022",
      activitieStarted:"10:00",
      activitieFinished:"11:30",
      Macroprocess:"Gerencia",
      Process:"Gobierno",
      Subprocess:"Asamblea General",
      description:"Acompañar asamblea",
      activitieDuration:"1.5"
    },
  ]

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
  /* console.log(tasksArray); */
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
        {/* Form activiteies */}
        <div className='flex justfiy-between items-center my-12 py-8 rounded-div'>
          <div className='w-full min-h-[300px]'>
            <h1 className='text-2xl font-bold py-4'>Iniciar Actividad</h1>
            <hr/>
            <AddActivitie/>
            <hr/>
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