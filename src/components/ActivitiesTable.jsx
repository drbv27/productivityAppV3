import React from 'react'

const ActivitiesTable = ({tasksArray}) => {
  console.log(tasksArray)
  return (
<div className=' bg-secondary p-4 rounded-xl mt-10 shadow-xl'>
<table className=' table-fixeds border border-slate-500  shadow-2xl w-full border-separate border-spacing-0.5'>
        <thead className='bg-third text-white'>

        <tr>
            <th className='border p-2 px-8'>fecha</th>
            <th className='border p-2'>Inicio</th>
            <th className='border p-2'>Final</th>
            <th className='border px-1 py-2'>Macroproceso/Proceso/Subproceso</th>
            <th className='border p-2'>Detalle</th>
            <th className='border p-2'>Total</th>
        </tr>
        </thead>
        <tbody className=' text-center bg-primary'>
            {tasksArray.map((activitie,index) => (
            <tr key={index}>
            <td className='border p-2'><p className='text-sm'>{activitie.dateMade}</p></td>
            <td className='border p-2'><span className='text-sm'>{activitie.activitieStarted}</span></td>
            <td className='border p-2'><span className='text-sm'>{activitie.activitieFinished}</span></td>
            <td className='border px-1 py-2'><span className='text-sm'>{activitie.Macroprocess}/{activitie.Process}/{activitie.Subprocess}</span></td>
            <td className='border p-2'>{activitie.description}</td>
            <td className='border p-2'>{activitie.activitieDuration}</td>

            </tr>
      ))}
            
        </tbody>


    </table>

    
</div>
    
  )
}

export default ActivitiesTable