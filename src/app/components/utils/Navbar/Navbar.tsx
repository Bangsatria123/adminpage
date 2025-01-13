import React from 'react'
import logo from "../img/logo.jpg"

const Navbar = () => {
  return (
    <div className='h-16 w-full bg-aqua text-gray-950 font-bold flex justify-between '>
        <div className="flex justify-center items-center px-4">
            <img src={logo.src} alt="logo" className='w-10 h-10 rounded-full'/>
        </div>
        <div className="flex justify-center items-center gap-11 me-20">
            {['/', '/create', '/edit', '/delete'].map((link, index) => (
                <a key={index} href={link} className='hover:text-snow transition ease-in-out delay-300'>{['READ', 'CREATE', 'EDIT', 'DELETE'][index]}</a>
            ))}
        </div>
    </div>
  )
}
export default Navbar