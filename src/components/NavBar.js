import React, { useState } from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { Link } from 'react-scroll'
import blogo from '../assets/logo.png';

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)

    return(
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">                    
                    <img className='h-[60px] ' src={blogo} alt="logo" />
                    <h1 className="text-2xl font-bold sm:text-3xl px-6">BIE Intelligence</h1>
                    <ul className="hidden md:flex">                    
                        <li><Link activeClass="active"
                                to="pricing"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-25}
                                duration={500}
                                delay={300}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={500}
                            >Pricing
                            </Link>
                        </li>
                        <li>Market Data</li>
                        <li>Insights</li>
                        <li>Outlooks</li>                        
                        <li><Link activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-40}
                                duration={500}
                                delay={300}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={500}
                            >Services
                            </Link>
                        </li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5'/>}
                    
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-b-zinc-300 w-full'>
                    <Link onClick={handleClose} activeClass="active"
                        to="pricing"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-25}
                        duration={500}
                        delay={300}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                        spyThrottle={500}>Pricing
                    </Link>
                </li>
                <li className='border-b-2 border-b-zinc-300 w-full'>Market Data</li>
                <li className='border-b-2 border-b-zinc-300 w-full'>Insights</li>
                <li className='border-b-2 border-b-zinc-300 w-full'>Outlooks</li>
                <li className='border-b-2 border-b-zinc-300 w-full'>
                <Link onClick={handleClose} activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-25}
                        duration={500}
                        delay={300}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                        spyThrottle={500}>Services
                    </Link>
                </li>
                <li className='border-b-2 border-b-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-b-zinc-300 w-full'>Contact Us</li>            
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-amber-400 px-8 py-4 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>

        </div>
    )
}

export default NavBar