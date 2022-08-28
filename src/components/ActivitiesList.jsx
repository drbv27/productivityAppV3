import React from 'react'
import {BiEditAlt,BiTrash} from 'react-icons/bi'

const ActivitiesList = ({activitiesArray}) => {
  return (
    <div>
        <h2 className='text-xl font-bold text-center'>Listado actividades</h2>
        {activitiesArray.map((activitieObject) =>{
            return(
                <div className='flex justify-between border px-6 py-2 mt-4 rounded-2xl shadow-lg hover:shadow-2xl'>
                    <div>
                        <h2 className='text-3xl'>{activitieObject.description}</h2>
                        <p><span className='font-bold'>Macroproceso:</span> {activitieObject.Macroprocess}</p>
                        <p><span className='font-bold'>Proceso:</span>{activitieObject.Process}</p>
                        <p><span className='font-bold'>Subproceso:</span>{activitieObject.Subprocess}</p>
                        <br/>
                        <div className='flex gap-5'>
                            <p><span className='font-bold'>Iniciada:</span>{activitieObject.activitieStarted}</p>
                            <p><span className='font-bold'>Finalizada:</span>{activitieObject.activitieFinished}</p>
                            <p><span className='font-bold'>Duración:</span>{activitieObject.activitieDuration}</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p>{activitieObject.dateMade}</p>
                        <button 
                            className='
                            w-full 
                            text-2xl 
                            text-btnText 
                            mt-5 
                            pl-7
                            border 
                            rounded-xl 
                            bg-yellowP 
                            shadow-xl'>
                                <BiEditAlt/>
                        </button>
                        <button 
                            className='
                            w-full 
                            text-2xl 
                            text-btnText 
                            mt-5 
                            pl-7
                            border 
                            rounded-xl 
                            bg-redP 
                            shadow-xl'>
                                <BiTrash/>
                        </button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ActivitiesList