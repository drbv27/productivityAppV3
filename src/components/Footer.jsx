import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF,FaYoutube} from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const Footer = () => {
  return (
        <div className='rounded-div mt-8 pt-8 text-primary'>
          <div className='grid md:grid-cols-2'>
            <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
              <div>
                <h2 className='font-bold'>SOPORTE</h2>
                <ul>
                  <li className='text-sm py-2'>Centro de ayuda</li>
                  <li className='text-sm py-2'>Contactenos</li>
                  <li className='text-sm py-2'>Documentación</li>
                </ul>
              </div>
              <div>
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
                <div className='w-full md:w-[300px] py-4 relative'>
                  <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                    <ThemeToggle />
                  </div>
                  <p className='text-center md:text-right'>Suscribete</p>
                  <div className='py-4'>
                    <form>
                      <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type='email' placeholder='Ingrese su email email' />
                      <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2'>Suscribir</button>
                    </form>
                  </div>
                  <div className='flex py-4 justify-between text-accent'>
                    <AiOutlineInstagram />
                   <FaYoutube/>
                    <FaFacebookF />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className='text-center py-4'>Develop by drbv27</p>
        </div>
  )
}

export default Footer