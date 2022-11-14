import React from 'react'
// import { CheckIcon } from '@heroicons/react/outline'
import iPhone from '../assets/mockupWhite.png'
import intellijA from '../assets/intelligentAdvisory.png'
// import GooglePlay from '../assets/google-play.png'
// import AppStore from '../assets/app-store.png'

const BusinessInfo = () => {
  return (
    <div className='w-full h-full'>
        {/* <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={SupportImage} alt="Support" />
        </div>         */}
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='grid grid-cols-1 gap-6-32 lg:grid-cols-2 gap-x-8 gap-y16 px-4 py-16 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl my-2'>
                    <div className='p-8'>
                        <h3 className='font-bold mt-6 text-2xl'>Business Info Ethiopia</h3>
                        <img src={iPhone} alt="Intelligent Advisory" />
                        <p className='text-xl text-gray-600'>Our daily business information service provides accurate information about businesses, economies, markets, companies, industries, and sectors across the country. We aim to inform individuals and corporates to make business decisions and/or to elicit ideas (Awe moments) for the next best business moves.</p>
                    </div>
                    {/* <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex text-indigo-600 text-center'>Find out More</p>
                    </div>                       */}
                </div>                
                <div className='bg-white rounded-xl shadow-2xl my-2'>
                    <div className='p-8'>   
                        <h3 className='font-bold mt-6 text-2xl'>Industry Intelligence & Advisory</h3>             
                        <img src={intellijA} alt="Intelligent Advisory" />
                        <p className='text-xl text-gray-600'>Our intelligence and advisory services are tailored to each company to keep track of all your market drivers by aggregating, curating, filtering, and mapping your specific requirements. By leveraging technology-driven, human-curated market intelligence data and information, we advise businesses on how to make better decisions.</p>
                    </div>
                    {/* <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex text-indigo-600 text-center'>Find out More</p>
                    </div>                       */}
                </div>
            
            </div>
        </div>
        
    </div>
  )
}

export default BusinessInfo