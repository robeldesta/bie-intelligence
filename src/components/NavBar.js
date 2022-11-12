import React, { useState } from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import blogo from '../assets/logo.png';

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return(
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    
                    <img className='h-[60px] ' src={blogo} alt="logo" />
                    <h1 className="text-2xl font-bold sm:text-3xl px-6">BIE Intelligence</h1>
                    <ul className="hidden md:flex">
                        <li>Pricing</li>
                        <li>Market Data</li>
                        <li>Insights</li>
                        <li>Outlooks</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5'/>}
                    
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-b-zinc-300 w-full'>Pricing</li>
                <li className='border-b-2 border-b-zinc-300 w-full'>Market Data</li>
                <li className='border-b-2 border-b-zinc-300 w-full'>Insights</li>
                <li className='border-b-2 border-b-zinc-300 w-full'>Outlooks</li>
                <li className='border-b-2 border-b-zinc-300 w-full'>Services</li>
                <li className='border-b-2 border-b-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-b-zinc-300 w-full'>Contact Us</li>            
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-4 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>

        </div>
    )
}

export default NavBar