import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import {BiPlayCircle,BiStopCircle,BiUpload,BiSearchAlt,BiPencil} from 'react-icons/bi'
import activitiesAndProcess from '../data/activitiesAndProcess';
import Edi from "../assets/img/EDI_RELAJADO.png"

import app from '../firebase';
import { getFirestore,updateDoc,doc } from 'firebase/firestore';

const firestore = getFirestore(app)

const AddActivitie = ({activitiesArray,userEmail,setTasksArray}) => {
  /* const [subprocess,setSubprocess] = useState(""); */
  /* const [process,setProcess] = useState(""); */
  const [activitieR,setActivitieR] = useState("");
  const [startActivitie,setStartActivitie] = useState("");
  const [finishActivitie,setFinishActivitie] = useState("");
  const {user} = UserAuth()
  /* console.log(user.email) */
  /* console.log(activitiesAndProcess) */
  const dateStamp = () => {
    const dateCapture = new Date();
    let day = dateCapture.getDate();
    day <= 9 ? (day = `0${day}`) : (day = day);
    let month = dateCapture.getMonth() + 1;
    month <= 9 ? (month = `0${month}`) : (month = month);
    const year = dateCapture.getFullYear();
    const dateToShow = `${day}-${month}-${year}`;
    /* console.log(fechar)
    console.log(`${anio}-${mes}-${dia}`) */
    return dateToShow;
  };

  const captureTimeActivitieStart = () => {
    const startActivitie = new Date();
    const startHour = startActivitie.getHours();
    let startMinute = startActivitie.getMinutes();
    startMinute <= 9 ? (startMinute = `0${startMinute}`) : (startMinute = startMinute);
    setStartActivitie(`${startHour}:${startMinute}`);
    /* console.log(`${startHour}:${startMinute}`); */
  };
  const captureTimeActivitieFinish = () => {
    const finishActivitie = new Date();
    const finishHour = finishActivitie.getHours();
    let finishMinute = finishActivitie.getMinutes();
    finishMinute <= 9 ? (finishMinute = `0${finishMinute}`) : (finishMinute = finishMinute);
    setFinishActivitie(`${finishHour}:${finishMinute}`);
   /*  console.log(`${finishHour}:${finishMinute}`); */
  };

async function addActivities(e){
  e.preventDefault();
  const subprocess = e.target.formSubprocess.value;
  const activitieRegistered = e.target.formActivitieRegistered.value;
  const process = activitiesAndProcess.filter((subprocessInner)=> subprocessInner.subproceso.includes(subprocess))[0].proceso;
  const macroprocess = activitiesAndProcess.filter((subprocessInner)=> subprocessInner.subproceso.includes(subprocess))[0].macroproceso;
  const activitieDuration = finishActivitie.split(":").reduce((p,c)=> parseInt(p) * 60 + parseInt(c)) - 
                            startActivitie.split(":").reduce((p,c)=> parseInt(p) * 60 + parseInt(c))
  //CREAR NUEVO ARRAY DE TAREAS
  const newActivitie = 
        {
          id: +new Date(),
          dateMade: dateStamp(),
          activitieStarted: startActivitie,
          activitieFinished: finishActivitie,
          Subprocess: subprocess,
          Process: process,
          Macroprocess: macroprocess,
          description: activitieRegistered,
          activitieDuration: activitieDuration,
        }
  const newActivitiesArray = [
    ...activitiesArray,newActivitie,
  ];
  //actualizar DB
  const docuRef = doc(firestore, `usersActivities/${userEmail}`);
      updateDoc(docuRef,{activities:[...newActivitiesArray]})
      //actualizar state
      setTasksArray(newActivitiesArray);
      //Limpiar formulario
      e.target.formSubprocess.value = "";
      e.target.formActivitieRegistered.value = "";

}
  
  return (
    <fieldset className='bg-secondary py-5 px-2 rounded-2xl'>
      <legend className='text-3xl flex'>Actividad  <img src={Edi} alt="" className='ml-2 w-16'/></legend>
      <div className='text-right font-extrabold text-lg'>
          <h2>{dateStamp()}</h2>
      </div>
      <div className='flex flex-row-reverse justify-between gap-5'>
        <div>
          <button onClick={captureTimeActivitieStart}
                  className='w-full 
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
            <button onClick={captureTimeActivitieFinish} 
                    className='w-full 
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
        <form className='flex flex-col flex-grow gap-5' onSubmit={addActivities}>
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
          <div className='w-full relative rounded-2xl shadow-xl'>
            <input 
              type="text" 
              className='w-full p-2 bg-primary border border-input rounded-2xl' 
              placeholder='digite actividad'
              id='formActivitieRegistered'
            />
            <BiPencil className='absolute right-2 top-3 text-gray-400 text-2xl' />
          </div>
        </div>
 
          <button className='w-full p-1 bg-button text-btnText rounded-2xl shadow-xl text-2xl '><BiUpload className='ml-auto mr-auto'/></button>
      </form>
      </div>
    </fieldset>
  )
}

export default AddActivitie