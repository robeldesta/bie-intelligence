import React from 'react'
import SupportImage from '../assets/support.jpg'
import {
    ArrowSmRightIcon,
    ChartBarIcon,
    LightBulbIcon,
    SearchCircleIcon
} from '@heroicons/react/solid'

const Services = () => {
  return (
    <div className='w-full h-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={SupportImage} alt="Support" />
        </div>        
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Services</h2>
                <h1 className='text-5xl text-center py-6 font-bold'>Find what you are looking for</h1>
                <p className='text-3xl text-center py-4 text-slate-300'>We collect the relevant data and visualize it in ways that help you understand what it means, so increasing the efficiency and effectiveness of business decision-making.</p>         
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y16 px-4 py-16 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <ChartBarIcon className='w-16 p-4 bg-amber-400 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold mt-6 text-2xl'>Market Data</h3>
                        <p className='text-xl text-gray-600'>Our business data resource portal provides industry market and consumer data for your convenience.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex text-indigo-600 text-center'>Find out More <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>                      
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <LightBulbIcon className='w-16 p-4 bg-amber-400 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold mt-6 text-2xl'>Insights</h3>
                        <p className='text-xl text-gray-600'>Our insights service provides brief market feasibility information. We aim to provide relevant-tailored market information on industries.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex text-indigo-600 text-center'>Find out More <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>                      
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <SearchCircleIcon className='w-16 p-4 bg-amber-400 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold mt-6 text-2xl'>Outlooks</h3>
                        <p className='text-xl text-gray-600'>Our outlooks service offers a vast array of industry-specific reports that deliver insights in the Ethiopian business context.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex text-indigo-600 text-center'>Find out More <ArrowSmRightIcon className='w-5 ml-2' /></p>
                    </div>                      
                </div>
            
            </div>
        </div>
        
    </div>
  )
}

export default Services