import React from 'react'
import {BiEditAlt,BiTrash} from 'react-icons/bi'
import app from '../firebase';
import { getFirestore,updateDoc,doc } from 'firebase/firestore';

const firestore = getFirestore(app)

const ActivitiesList = ({activitiesArray,userEmail,setTasksArray}) => {

    async function deleteActivitie(activitieId){
        //create new activities array
        const newActivitiesArray = activitiesArray.filter(
            (activitieObject) => activitieObject.id !== activitieId
        );
        //update DB
        const docuRef = doc(firestore,`usersActivities/${userEmail}`);
        updateDoc(docuRef,{activities:[...newActivitiesArray]});
        //update state
        setTasksArray(newActivitiesArray);
    }

  return (
    <div>
        <h2 className='text-xl font-bold text-center'>Listado actividades</h2>
        {activitiesArray.map((activitieObject) =>{
            return(
                <div className='flex justify-between border px-6 py-2 mt-4 rounded-2xl shadow-lg hover:shadow-2xl' key={activitieObject.id}>
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
                            shadow-xl'
                            onClick={()=>deleteActivitie(activitieObject.id)}>
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