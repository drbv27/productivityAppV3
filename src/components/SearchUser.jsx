import React,{useState} from 'react'
import {BiPlayCircle,BiStopCircle,BiUpload,BiSearchAlt,BiPencil} from 'react-icons/bi'

const SearchUser = (usuariosD) => {
    const [actualUser,setActualUser] = useState({})
    const users = usuariosD.usuariosD
    console.log("usuarios",users)

    async function userFilter(e){
        e.preventDefault();
        const userFiltered = e.target.formUsers.value;
        console.log("detalles",users.filter((userDetail)=>userDetail.details.email===userFiltered));
        console.log(userFiltered);
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
    <input type="date" name="" id="" className='grow'/>
    <input type="date" name="" id="" className='grow'/>
    <button>Consultar</button>
  </div>
  </form>
  <div>
  <div className="flex">
        <div>
            <h3>Nombre:</h3>
        </div>
        <div>Grafica</div>
    </div>
            <div>tabla</div>
  </div>

  </>
  )
}

export default SearchUser