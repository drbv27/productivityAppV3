import React from 'react'

const ActivitiesTable = ({tasksArray}) => {
  console.log(tasksArray)
  return (
<div className=' bg-secondary p-4 rounded-xl mt-10 shadow-lg hover:shadow-xl overflow-hidden'>
<table className=' table table-auto border border-slate-500  shadow-2xl w-full border-separate border-spacing-0.5 leading-normal'>
        <thead className='bg-third text-white'>

        <tr className='hidden md:table-row'>
            <th className='border p-2 px-8'>fecha</th>
            <th className='border p-2'>Inicio</th>
            <th className='border p-2'>Final</th>
            <th className='border px-1 py-2'>Macroproceso/Proceso/Subproceso</th>
            <th className='border p-2'>Detalle</th>
            <th className='border p-2'>Total</th>
        </tr>
        </thead>
        <tbody className=' text-center bg-primary flex-1 sm:flex-none'>
            {tasksArray.map((activitie,index) => (
            <tr key={index} className="border-t first:border-t-0 flex p-1 md:p-3 hover:bg-gray-100 md:table-row flex-col w-full flex-wrap">
              <td className='border p-2'>
                <label htmlFor="" className='bg-third text-white text-xs uppercase font-semibold md:hidden px-2'>fecha</label>
                <p className='text-sm'>
                {activitie.dateMade}
                </p>
              </td>
              <td className='border p-2'>
                <label htmlFor="" className='bg-third text-white text-xs uppercase font-semibold md:hidden px-2'>Inicio</label>
                <p className='text-sm'>{activitie.activitieStarted}</p>
              </td>
              <td className='border p-2'>
                <label htmlFor="" className='bg-third text-white text-xs uppercase font-semibold md:hidden px-2'>Final</label>
                <p className='text-sm'>{activitie.activitieFinished}</p>
                </td>
              <td className='border px-1 py-2'>
                <label htmlFor="" className='bg-third text-white text-xs uppercase font-semibold md:hidden px-2'>Macroproceso/Proceso/Subproceso</label>
                <p className='text-sm'>{activitie.Macroprocess}/{activitie.Process}/{activitie.Subprocess}</p>
              </td>
              <td className='border p-2'>
                <label htmlFor="" className='bg-third text-white text-xs uppercase font-semibold md:hidden px-2'>Detalle</label>
                <p className='text-sm'>{activitie.description}</p>
              </td>
              <td className='border p-2'>
                <label htmlFor="" className='bg-third text-white text-xs uppercase font-semibold md:hidden px-2'>Duración</label>
                <p className='text-sm'>{activitie.activitieDuration}</p>
              </td>
              <br />
            </tr>
            
      ))}
            
        </tbody>


    </table>

    
</div>
    
  )
}

export default ActivitiesTable