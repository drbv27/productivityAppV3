import React from 'react'
import {AiOutlineInstagram,AiOutlineMail,AiOutlineGithub} from 'react-icons/ai'
import {FaFacebookF,FaYoutube} from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const Footer = () => {
  return (
        <div className='rounded-div mt-8 pt-8 text-primary mb-4'>
          <div className='grid md:grid-cols-2'>
            <div className='flex justify-evenly w-full md:max-w-[500px] uppercase gap-4'>
              <div >
                <h2 className='font-bold'>SOPORTE</h2>
                <ul>
                  <li className='text-sm py-2'>Centro de ayuda</li>
                  <li className='text-sm py-2'>Contactenos</li>
                  <li className='text-sm py-2'>Documentación</li>
                </ul>
              </div>
              <div className='grow'>
                <h2 className='font-bold'>INFORMACIÓN</h2>
                <ul>
                  <li className='text-sm py-2'>Quienes somos</li>
                  <li className='text-sm py-2'>Trabaja con Nosotros</li>
                  <li className='text-sm py-2'>Tratamiento de datos</li>
                </ul>
              </div>
            </div>
            <div className='text-right'>
              <div className='w-full flex justify-end'>
                <div className='w-full md:w-[300px] relative'>
                
                    <form className='flex flex-col'>
                      <div>
                        <label htmlFor="suscribeEmail">Suscribete:  </label>
                        <input className='bg-primary border border-input p-2 mr-2 ml-2 w-full shadow-xl rounded-2xl md:w-auto' type='email' placeholder='Ingrese su email' id="suscribeEmail"/>
                      </div>
                      <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2'>Suscribir</button>
                    </form>
                  

                </div>
              </div>
            </div>
          </div>
          <div className='md:flex justify-between mb-3'>
            <div className='grow md:flex justify-start gap-3'>
              <p>Siguenos: </p>
              <p className='flex justify-left md:justify-between gap-3'>
                <a href="https://www.instagram.com/pygmaliontech/" target="_blank" ><AiOutlineInstagram className='mt-2'/></a>
                <a href="https://www.youtube.com/PygmalionTech" target="_blank"><FaYoutube className='mt-2'/></a>
                <a href="https://www.facebook.com/PygmalionTech" target="_blank"><FaFacebookF className='mt-2'/></a>
              </p>
            </div>
            <hr className='my-2'/>
            <div className='grow md:flex justify-end gap-3'>
              <p>Develop by drbv27 &copy;2022</p>
              <p className='flex justify-left md:justify-between gap-3'>
                <a href="mailto:drbv27@gmail.com" target="_blank" ><AiOutlineMail className='mt-2'/></a>
                <a href="https://github.com/drbv27" target="_blank" ><AiOutlineGithub className='mt-2'/></a>
              </p>
            </div>
          </div>
        </div>
  )
}

export default Footer