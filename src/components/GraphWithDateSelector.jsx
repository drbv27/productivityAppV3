import React, { useState } from 'react'
import BarChartGraphic from './BarchartGraphic'
import Edi from "../assets/img/EDI_RELAJADO.png"


const GraphWithDateSelector = ({tasksArray}) => {
  const [filterToArray,setFilterToArray] = useState(null)
 
  /* console.log("arrayyy",tasksArray); */

  async function activitiesFilter(e){
    e.preventDefault();
    const originalInitialFilter = e.target.initialDate.value;
    const originalFinalFilter = e.target.finalDate.value;
/*     const initialFilter = `${originalInitialFilter[2]}-${originalInitialFilter[1]}-${originalInitialFilter[0]}`
    const finalFilter = `${originalFinalFilter[2]}-${originalFinalFilter[1]}-${originalFinalFilter[0]}` */
/*     console.log("inicial",originalInitialFilter);
    console.log("final",originalFinalFilter); */
    /* console.log(arrayTareas); */
/*     console.log(tasksArray.filter((item)=>{return(item.dateMade>=initialFilter && item.dateMade<=finalFilter)})); */
    const filteredArray = tasksArray.filter((item)=>{return(item.dateMade>=originalInitialFilter && item.dateMade<=originalFinalFilter)})
/*     console.log(tasksArray);
    console.log(filteredArray); */
    setFilterToArray(filteredArray)
    
    /* console.log(arrayFiltrado) */
    e.target.initialDate.value = "";
    e.target.finalDate.value = "";
/*     console.log("filtrado",filterToArray) */
}

  return (
    <>
    <fieldset className='bg-secondary py-5 px-2 rounded-t-2xl'>
    <legend className='text-3xl flex font-bold'>
      Distribución de Horas  <img src={Edi} alt="" className='ml-2 w-16'/>
    </legend>
    <form className=' md:flex justify-evenly gap-4 mb-3 mx-2' onSubmit={activitiesFilter}>
      <div className='flex flex-col flex-grow'>
        <label htmlFor="InitialDate" className='font-semibold'>Fecha Inicial</label>
        <input type="date" name="initalDate" id="initialDate" className='p-1 rounded shadow font-semibold'/>
      </div>
      <div className='flex flex-col flex-grow '>
        <label htmlFor="finalDate" className='font-semibold'>Fecha Inicial</label>
        <input type="date" name="finalDate" id="finalDate" className='p-1 rounded shadow font-semibold'/>
      </div>
      <div>
        <button className='bg-button p-2 mt-4 rounded-xl font-semibold text-btnText'>Filtrar</button>
      </div>
    </form>
    </fieldset>
    <div className='bg-secondary py-5 px-2 rounded-b-2xl shadow-2xl'>
      <div className="bg-primary mx-2 rounded">
        <BarChartGraphic tasksArray={filterToArray} />
      </div>
    </div>
    </>
  )
}

export default GraphWithDateSelector