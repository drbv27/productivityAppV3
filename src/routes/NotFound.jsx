import React from 'react'
import Navbar from '../components/Navbar'
import Triste from '../assets/img/triste.png'
const NotFound = () => {
  return (
    <>
    <Navbar/>
    <div className='max-w-[1140px] mx-auto my-5 text-center flex-col justify-center'>
    <img src={Triste} alt="triste" className='ml-auto mr-auto text-center h-[300px]'/>
    <h1 className='text-5xl'>Upsss....No encontramos ese recurso!!!</h1>
    </div>
    </>
  )
}

export default NotFound