import React, { useState } from 'react';
import Logo from '../../assets/Logo.png'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as BSIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { medsos } from './api-nav.js';


const Navbar = () => {

    const [NavClick, SetNav] = useState(false);
    const handleClick = () => SetNav(!NavClick);



  return (
    <div className='sticky top-0 w-full h-[80px] flex justify-between items-center px-5 bg-[#084C72] border-b-1 z-10'>
        <div className='z-10'>
            <img src={Logo} alt="my-logo" style={{width:'50px'}} />
        </div>
        <div>
            <ul className='hidden md:flex'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About Me</Link></li>
                <li>Contact Us</li>
            </ul>
        </div>

        <div className='md:hidden z-10 text-3xl cursor-pointer' onClick = {handleClick} >
            {NavClick ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars /> }
        </div>
        
        <ul className={NavClick ? 'lg:hidden md:hidden w-full h-screen flex flex-col items-center justify-center absolute left-0 right-0 top-0 bg-[#084C72] transition duration-400 ease-in' : 'absolute right-full transition-duration-500 ease-out'}>
            <li>Home</li>
            <li>About Me</li>
            <li>Contact Us</li>
        </ul>

        <div className='hidden fixed lg:flex flex-col left-0 top-[35%]'>
            <ul>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#43A21C] '><Link className='flex justify-between w-full items-center'  to="https://wa.me/081323848971">Whatsapp <BSIcons.BsWhatsapp size={30} /></Link></li> */}
                {medsos.map((items, id) =>{
                    return (
                        <li className={items.class} key={id}><Link to={items.link} className='flex justify-between w-full items-center' >{items.name} {items.icon}</Link></li>
                    )
                })}
            </ul>

        </div>
        

       


    </div>
  )
}

export default Navbar