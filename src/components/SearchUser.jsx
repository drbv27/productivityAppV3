import React,{useState} from 'react'
import {BiPlayCircle,BiStopCircle,BiUpload,BiSearchAlt,BiPencil} from 'react-icons/bi'
import ActivitiesTable from './ActivitiesTable'
import BarChartGraphic from './BarchartGraphic'
import GraphWithDateSelector from './GraphWithDateSelector'

const SearchUser = (usuariosD) => {
    const [actualUser,setActualUser] = useState({
        name:"",
        lastname:"",
        workArea:""
    })
    const [actualActivities,setActualActivities] = useState([])
    const [filterToArray,setFilterToArray] = useState(null)
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
        const filteredArray = userActivities.filter((item)=>{return(item.dateMade>=initialFilterDate && item.dateMade<=finalFilterDate)})

        setActualUser(userInfo)
        setActualActivities(filteredArray)
        console.log("detalles",userFiltered);
        console.log(userInfo);
        console.log(actualActivities)
        
    }

    
 
    /* console.log("arrayyy",tasksArray); */
  
    async function activitiesFilter(e){
      e.preventDefault();
      const originalInitialFilter = e.target.initialDate.value;
      const originalFinalFilter = e.target.finalDate.value;
  /*     const initialFilter = `${originalInitialFilter[2]}-${originalInitialFilter[1]}-${originalInitialFilter[0]}`
      const finalFilter = `${originalFinalFilter[2]}-${originalFinalFilter[1]}-${originalFinalFilter[0]}` */
  /*     console.log("inicial",originalInitialFilter);
      console.log("final",originalFinalFilter); */
      /* console.log(arrayTareas); */
  /*     console.log(tasksArray.filter((item)=>{return(item.dateMade>=initialFilter && item.dateMade<=finalFilter)})); */
      const filteredArray = tasksArray.filter((item)=>{return(item.dateMade>=originalInitialFilter && item.dateMade<=originalFinalFilter)})
  /*     console.log(tasksArray);
      console.log(filteredArray); */
      setFilterToArray(filteredArray)
      
      /* console.log(arrayFiltrado) */
      e.target.initialDate.value = "";
      e.target.finalDate.value = "";
  /*     console.log("filtrado",filterToArray) */
  }

  return (
    <>
    <form onSubmit={userFilter} className='my-2 w-full relative md:flex'>
    <div className='my-2 w-full relative rounded-2xl shadow-xl mx-2'>
    <input 
      list="usersF" 
      name="user" 
      id="formUsers" 
      className='w-full p-2 bg-primary border border-input rounded-md' 
      placeholder='Buscar Usuario' 
    />
    <datalist id="usersF">
      {users.map((usuario,index) => (
        <option key={index} value={usuario.details.email} >{usuario.details.name} {usuario.details.lastname}</option>
      ))}
    </datalist>
      <BiSearchAlt className='absolute right-2 top-3 text-gray-400 text-2xl' />
  </div>

  <div className='md:flex justify-between items-center gap-2 mx-2'>
    <input type="date" name="initialFilterDate" id="initialFilterDate" className='grow rounded-md px-4 py-2'/>
    <input type="date" name="finalFilterDate" id="finalFilterDate" className='grow rounded-md px-4 py-2'/>
    <button className='bg-button p-2 rounded-xl font-semibold text-btnText'>Consultar</button>
  </div>
  </form>
  <div className='w-full'>
    <div>
        <div className='md:flex bg-primary p-2 rounded mb-2 justify-center gap-4 mx-2'>
            <h3>Nombre: <span className='font-bold'>{actualUser.name} {actualUser.lastname}</span></h3>
            <h3>Area: <span className='font-bold'>{actualUser.workArea}</span></h3>
        </div>
         <div className="bg-primary mx-2 rounded grow">
            <BarChartGraphic tasksArray={actualActivities} className="rounded-xl"/>
        </div>
    </div>
        <ActivitiesTable tasksArray={actualActivities}/>
  </div>

  </>
  )
}

export default SearchUser