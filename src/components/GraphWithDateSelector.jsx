import React from 'react'
import BarChartGraphic from './BarchartGraphic'


const GraphWithDateSelector = ({tasksArray}) => {
  /* console.log("arrayyy",tasksArray); */
  return (
    <BarChartGraphic tasksArray={tasksArray}/>
  )
}

export default GraphWithDateSelector