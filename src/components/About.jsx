import React from 'react'

const About = () => {
  return (
    <div className='w-full my-32 px-12'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Purpose-driven firm with data and technology to augment your business decisions </h2>
                <p className='text-3xl py-6 text-gray-500'>With so much data available, it's getting increasingly challenging to focus on the information that's relevant to our problems and convey it in a practical manner. That is the primary objective of BIE intelligence.</p>
            </div>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>100%</p>
                <p className='text-gray-400 mt-2'>Competence</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                <p className='text-gray-400 mt-2'>Delivery</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>100k</p>
                <p className='text-gray-400 mt-2'>Transactions</p>
            </div>
        </div>
    </div>
  )
}

export default About