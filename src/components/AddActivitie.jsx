import React from 'react'
import { UserAuth } from '../context/AuthContext';
import {BiPlayCircle,BiStopCircle,BiUpload,BiSearchAlt,BiPencil} from 'react-icons/bi'
import activitiesAndProcess from '../data/activitiesAndProcess';
import Edi from "../assets/img/EDI_RELAJADO.png"

const AddActivitie = () => {
  const {user} = UserAuth()
  /* console.log(user.email) */
  console.log(activitiesAndProcess)
  return (
    <fieldset className='bg-secondary py-5 px-2 rounded-2xl'>
      <legend className='text-3xl flex'>Actividad  <img src={Edi} alt="" className='ml-2 w-16'/></legend>
      <form className='flex justify-between gap-5'>
        <div className='flex-grow'>


        <div className='my-2 w-full relative rounded-2xl shadow-xl'>
          <input list="subprocesos" name="subproceso" id="subproceso" className='w-full p-2 bg-primary border border-input rounded-2xl' placeholder='Buscar subproceso'/>
          <datalist id="subprocesos">
            <option value="seleccione" />
            {activitiesAndProcess.map((activitie,index) => (
              <option key={index}>{activitie.subproceso}</option>
            ))}
          </datalist>
          <BiSearchAlt className='absolute right-2 top-3 text-gray-400 text-2xl' />
        </div>
        <div className='my-2 w-full relative rounded-2xl shadow-xl'>
          <input type="text" className='w-full p-2 bg-primary border border-input rounded-2xl' placeholder='digite actividad'/>
          <BiPencil className='absolute right-2 top-3 text-gray-400 text-2xl' />
        </div>
        </div>
        <div>
          <button className='w-full 
                            text-2xl 
                            text-btnText 
                            p-1
                            my-2
                            border 
                            rounded-2xl 
                            bg-third 
                            shadow-xl'><BiPlayCircle className='ml-auto mr-auto'/></button>
          <button className='w-full my-2 p-1 bg-redP text-btnText rounded-2xl shadow-xl text-2xl '><BiStopCircle className='ml-auto mr-auto'/></button>
          <button className='w-full my-2 p-1 bg-button text-btnText rounded-2xl shadow-xl text-2xl '><BiUpload className='ml-auto mr-auto'/></button>
        </div>
      </form>
    </fieldset>
  )
}

export default AddActivitie