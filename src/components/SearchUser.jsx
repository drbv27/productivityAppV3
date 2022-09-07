import React from 'react'
import {BiPlayCircle,BiStopCircle,BiUpload,BiSearchAlt,BiPencil} from 'react-icons/bi'

const SearchUser = (usuariosD) => {
    const users = usuariosD.usuariosD
    console.log("usuarios",users)
  return (
    <div className='my-2 w-full relative rounded-2xl shadow-xl'>
    <input 
      list="users" 
      name="usuario" 
      id="formUsers" 
      className='w-full p-2 bg-primary border border-input rounded-2xl' 
      placeholder='Buscar Usuario' 
    />
    <datalist id="users">
      {users.map((usuario,index) => (
        <option key={index}>{usuario.details.name} {usuario.details.lastname}</option>
      ))}
    </datalist>
      <BiSearchAlt className='absolute right-2 top-3 text-gray-400 text-2xl' />
  </div>
  )
}

export default SearchUser