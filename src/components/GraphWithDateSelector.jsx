import React from 'react'
import BarChartGraphic from './BarchartGraphic'
import Edi from "../assets/img/EDI_RELAJADO.png"


const GraphWithDateSelector = ({tasksArray}) => {
  /* console.log("arrayyy",tasksArray); */
  return (
    
    <fieldset className='bg-secondary py-5 px-2 rounded-2xl shadow-2xl'>
    <legend className='text-3xl flex font-bold'>
      Distribución de Horas  <img src={Edi} alt="" className='ml-2 w-16'/>
    </legend>
    <div className=' flex justify-evenly gap-4 mb-3 mx-2'>
      <div className='flex flex-col flex-grow'>
        <label htmlFor="InitialDate" className='font-semibold'>Fecha Inicial</label>
        <input type="date" name="initalDate" id="initialDate" className='p-1 rounded shadow font-semibold'/>
      </div>
      <div className='flex flex-col flex-grow '>
      <label htmlFor="finalDate" className='font-semibold'>Fecha Inicial</label>
      <input type="date" name="finalDate" id="finalDate" className='p-1 rounded shadow font-semibold'/>
      </div>
    </div>
      <div className="bg-primary mx-2 rounded">
      <BarChartGraphic tasksArray={tasksArray}/>
      </div>
    </fieldset>
  )
}

export default GraphWithDateSelector