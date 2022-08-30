import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import {BiPlayCircle,BiStopCircle,BiUpload,BiSearchAlt,BiPencil} from 'react-icons/bi'
import activitiesAndProcess from '../data/activitiesAndProcess';
import Edi from "../assets/img/EDI_RELAJADO.png"

const AddActivitie = () => {
  /* const [subprocess,setSubprocess] = useState(""); */
  /* const [process,setProcess] = useState(""); */
  const [activitieR,setActivitieR] = useState("");
  const {user} = UserAuth()
  /* console.log(user.email) */
  /* console.log(activitiesAndProcess) */


async function addActivitie(e){
  e.preventDefault();
  const subprocess = e.target.formSubprocess.value;
  const activitieRegistered = e.target.formActivitieRegistered.value;
  const process = activitiesAndProcess.filter((subprocessInner)=> subprocessInner.subproceso.includes(subprocess))[0].proceso;
  const macroprocess = activitiesAndProcess.filter((subprocessInner)=> subprocessInner.subproceso.includes(subprocess))[0].macroproceso;
  //CREAR NUEVO ARRAY DE TAREAS
  const newActivitie = 
        {
          id: +new Date(),
          /* fecha: fecha, */
          /* inicio: inicio, */
          /* final: final, */
          subproceso: subprocess,
          proceso: process,
          macroproceso: macroprocess,
          actividad: activitieRegistered,
          /* total: total, */
        }
    
  console.log(newActivitie);
  console.log(newActivitie.proceso);
}
  
  return (
    <fieldset className='bg-secondary py-5 px-2 rounded-2xl flex flex-row-reverse justify-between gap-5'>
      <legend className='text-3xl flex'>Actividad  <img src={Edi} alt="" className='ml-2 w-16'/></legend>
      <div>
      <button className='w-full 
                            text-2xl 
                            text-btnText 
                            p-1
                            px-5
                            my-2
                            border 
                            rounded-2xl 
                            bg-third 
                            shadow-xl'>
                              <BiPlayCircle className='ml-auto mr-auto'/>
          </button>
          <button className='w-full 
                            my-2 
                            p-1 
                            bg-redP 
                            text-btnText 
                            rounded-2xl 
                            shadow-xl 
                            text-2xl '>
                              <BiStopCircle className='ml-auto mr-auto'/>
            </button>
      </div>
      <form className='flex flex-col flex-grow gap-5' onSubmit={addActivitie}>
        <div className='flex-grow'>
        <div className='my-2 w-full relative rounded-2xl shadow-xl'>
          <input 
          list="subprocesos" 
          name="subproceso" 
          id="formSubprocess" 
          className='w-full p-2 bg-primary border border-input rounded-2xl' 
          placeholder='Buscar subproceso' 
          
          />
           <datalist id="subprocesos">
            {activitiesAndProcess.map((activitie,index) => (
              <option key={index}>{activitie.subproceso}</option>
            ))}
          </datalist>
          <BiSearchAlt className='absolute right-2 top-3 text-gray-400 text-2xl' />
        </div>
        <div className='my-2 w-full relative rounded-2xl shadow-xl'>
          <input 
            type="text" 
            className='w-full p-2 bg-primary border border-input rounded-2xl' 
            placeholder='digite actividad'
            id='formActivitieRegistered'
            />
          <BiPencil className='absolute right-2 top-3 text-gray-400 text-2xl' />
        </div>
        </div>
 
          <button className='w-full my-2 p-1 bg-button text-btnText rounded-2xl shadow-xl text-2xl '><BiUpload className='ml-auto mr-auto'/></button>
      </form>
    </fieldset>
  )
}

export default AddActivitie