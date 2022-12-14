import React from 'react';
import BIntelj from '../assets/business-intelligence.png';
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/solid';

const Hero = ({content}) => {
    console.log(content)
    return(
        <div name="home" className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl mt-6 sm:mt-2'>{content ? 'Yes55555555 ' : 'No00000 '} Business Insights and Solutions</p>
                    <h1 className='py-2 text-5xl md:text-7xl font-bold uppercase'>bie intelligence</h1>
                    <h1 className='text-2xl'>Purpose-driven firm with data and technology to augment business decisions</h1>
                    <button className='py-3 px-8 sm:w-[60%] my-4'>Get Started</button>
                </div>
                <div>
                    <img className='w-full' src={BIntelj} alt="Business Intelligence" />
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] 
                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 
                border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p>Business Intelligence</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-amber-400' />Data Driven</p>
                        <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-amber-400' />Purpose Driven</p>
                        <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-amber-400' />Data Analysis</p>
                        <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-amber-400' />Business Insights</p>
                    </div>
                </div>                   
            </div>                     
        </div>
    )
}

export default Hero