import React,{useState} from 'react'
import {BiPlayCircle,BiStopCircle,BiUpload,BiSearchAlt,BiPencil} from 'react-icons/bi'
import ActivitiesTable from './ActivitiesTable'
import BarChartGraphic from './BarchartGraphic'

const SearchUser = (usuariosD) => {
    const [actualUser,setActualUser] = useState({
        name:"",
        lastname:"",
        workArea:""
    })
    const [actualActivities,setActualActivities] = useState([])
    const users = usuariosD.usuariosD
    console.log("usuarios",users)

    async function userFilter(e){
        e.preventDefault();
        const userFilter = e.target.formUsers.value;
        const initialFilterDate = e.target.initialFilterDate.value
        const finalFilterDate = e.target.finalFilterDate.value
        const userFiltered = users.filter((userDetail)=>userDetail.details.email===userFilter)
        const userInfo = {
            name:userFiltered[0].details.name,
            lastname:userFiltered[0].details.lastname,
            workArea:userFiltered[0].details.workArea
        }
        const userActivities = userFiltered[0].activities
        setActualUser(userInfo)
        setActualActivities(userActivities)
        console.log("detalles",userFiltered);
        console.log(userInfo);
        console.log(actualActivities)
        
    }
  return (
    <>
    <form onSubmit={userFilter} className='my-2 w-full relative'>
    <div className='my-2 w-full relative rounded-2xl shadow-xl mb-4'>
    <input 
      list="usersF" 
      name="user" 
      id="formUsers" 
      className='w-full p-2 bg-primary border border-input rounded-2xl' 
      placeholder='Buscar Usuario' 
    />
    <datalist id="usersF">
      {users.map((usuario,index) => (
        <option key={index} value={usuario.details.email} >{usuario.details.name} {usuario.details.lastname}</option>
      ))}
    </datalist>
      <BiSearchAlt className='absolute right-2 top-3 text-gray-400 text-2xl' />
  </div>

  <div className='flex justify-between gap-2'>
    <input type="date" name="initialFilterDate" id="initialFilterDate" className='grow'/>
    <input type="date" name="finalFilterDate" id="finalFilterDate" className='grow'/>
    <button>Consultar</button>
  </div>
  </form>
  <div className='w-full'>
    <div className="flex flex-row justify-between gap-2">
        <div className='bg-primary p-2 rounded'>
            <h3>Nombre: {actualUser.name} {actualUser.lastname}</h3>
            <h3>Area: {actualUser.workArea}</h3>
        </div>
        <div className="bg-primary mx-2 rounded grow">
            <BarChartGraphic tasksArray={actualActivities} />
        </div>
    </div>
        <ActivitiesTable/>
  </div>

  </>
  )
}

export default SearchUser