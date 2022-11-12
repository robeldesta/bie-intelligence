import React from 'react';
import BIntelj from '../assets/business-intelligence.png';
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/solid';

const Hero = () => {
    return(
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Ethiopia’s Business Insight and Solution Firm</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Business Intelligence</h1>
                    <h1 className='text-2xl'>Purpose-driven firm with data and technology to augment business decisions</h1>
                    <button className='py-3 px-8 sm:w-[60%] my-4'>Get Started</button>
                </div>
                <div>
                    <img className='w-full' src={BIntelj} alt="Business Intelligence" />
                </div>
                <div className='absolute flex flex-col md:min-w-[760px] bottom-[5%] 
                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 
                border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p>Business Intelligence</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' />Data Driven</p>
                        <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' />Purpose Driven</p>
                        <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' />Data Analysis</p>
                        <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' />Business Insights</p>
                    </div>
                </div>                   
            </div>                     
        </div>
    )
}

export default Hero