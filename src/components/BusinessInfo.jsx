import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
import iPhone from '../assets/mockupWhite.png'
import intellijA from '../assets/intelligentAdvisory.png'
import GooglePlay from '../assets/google-play.png'
import AppStore from '../assets/app-store.png'

const BusinessInfo = () => {
  return (
    <div className='w-full my-8 px-12'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'>All-In-One Service</h2>
            <p className='text-2xl py-8 text-gray-500 text-center'>Business Information at your finger tips</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>       
            <div>
                {/* <div className='bg-gray-400/80 rounded-2xl absolute'>
                    <img className=' w-[600px] h-full mix-blend-overlay' src={iPhone} alt="iPhone-app" />
                </div> */}
                <div className='flex relative'>
                    <div>
                        <CheckIcon className='pt-4 w-7 text-green-600' />
                    </div>
                    <div className='pt-4 mr-4'>
                        <h3 className='font-bold text-lg'>Business Info Ethiopia</h3>
                        <div className='mt-2'>
                            <p className='text-bold justify-start text-lg pb-4 px-12'>Our daily business information service provides accurate information about businesses, economies, markets, companies, industries, and sectors across the country. We aim to inform individuals and corporates to make business decisions and/or to elicit ideas (Awe moments) for the next best business moves.</p>
                        </div>
                        <div className='mx-4 text-center rounded-2xl shadow-2xl'>
                            <div className='px-2'>
                                <img className='w-[500px] h-full mix-blend-overlay' src={iPhone} alt="iPhone-app" />
                            </div>
                            <div className='flex pb-6 mx-24 justify-between'>
                                <img className='h-10' src={GooglePlay} alt="Google Play" />
                                <img className='h-10' src={AppStore} alt="App Store" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <div className='bg-gray-400/40 rounded-2xl absolute'>
                    <img className=' w-[600px] h-full mix-blend-overlay' src={intellijA} alt="Intelligent Advisory" />
                </div> */}
                <div className='flex relative'>
                    <div>
                        <CheckIcon className='pt-4 w-7 text-green-600' />
                    </div>
                    <div className='pt-4 mr-4'>
                        <h3 className='font-bold text-lg'>Business Info Ethiopia</h3>
                        <div className='mt-2'>
                            <p className='text-bold justify-start text-lg pb-4 px-12'>Our intelligence and advisory services are tailored to each company to keep track of all your market drivers by aggregating, curating, filtering, and mapping your specific requirements. By leveraging technology-driven, human-curated market intelligence data and information, we advise businesses on how to make better decisions.</p>
                        </div>
                        <div className='mx-4 text-center rounded-2xl shadow-2xl'>
                            <div className='px-2'>
                                <img className='w-[500px] h-full mix-blend-overlay' src={intellijA} alt="Intelligent Advisory" />
                            </div>
                            <div className='flex pb-6 mx-24 text-center'>
                                <button className='px-6 h-10 mx-24'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                       
        </div>        
    </div>
  )
}

export default BusinessInfo