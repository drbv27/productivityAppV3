import React from 'react'
import {Link} from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold bg-appblue'>
        <Link to="/">
            <h1 className='text-2xl'>ProductivityApp</h1>
        </Link>
        <div className='hidden md:block'>
            <ThemeToggle />
        </div>
        <div className='hidden md:block'>
            <Link to='/signin' className='p-4 hover:text-accent'>Ingresar</Link>
            <Link to='/signup'
                className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'
                >Registrarse
            </Link>
        </div>

        {/*Menu Icon*/}
        <div>
            <AiOutlineMenu/>
        </div>
        {/*Mobile Menu */}
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Account</Link>
                </li>
                <li>
                    <ThemeToggle/>
                </li>
            </ul>
            <div>
                <Link to='/signin'>
                    <button>Ingresar</button>
                </Link>
                <Link to='/signup'>
                    <button>Registrarse</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar

