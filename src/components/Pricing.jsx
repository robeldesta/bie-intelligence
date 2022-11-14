import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const Pricing = () => {
  return (
    <div name="pricing" className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 mix-blend-overlay absolute'></div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The right price for Intelligence</h3>
                <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis sapiente consequuntur voluptatem recusandae quod cum necessitatibus alias eos quia. Sunt voluptate aperiam commodi deleniti natus nisi ut quas itaque!</p>
            </div>            
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-amber-400 text-amber-900 rounded-2xl text-sm'>Standard</span>
                <div className='flex flex-row justify-start'>
                    <p className='text-4xl font-bold py-4 flex'>$4.99</p>
                    <p className='text-4xl font-bold py-4 flex'>&nbsp;(249 ETB)<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>   
                <p className='text-2xl py-8 text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit ut, magni, dolores, officiis quidem atque distinctio doloremque minus officia quis nobis? Quia cum aut placeat recusandae qui animi autem.</p> 
                <div className='text-2xl relative'>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <button className='w-full py-4 my-4'>Get Started</button>
                </div>
            </div>

            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-amber-400 text-amber-900 rounded-2xl text-sm'>Premium</span>
                <div className='flex flex-row justify-start'>
                    <p className='text-4xl font-bold py-4 flex'>$49.99</p>
                    <p className='text-4xl font-bold py-4 flex'>&nbsp;(2,499 ETB)<span className='text-xl text-slate-500 flex flex-col justify-end'>/yr</span></p>
                </div>   
                <p className='text-2xl py-8 text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit ut, magni, dolores, officiis quidem atque distinctio doloremque minus officia quis nobis? Quia cum aut placeat recusandae qui animi autem.</p> 
                <div className='text-2xl relative'>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <button className='w-full py-4 my-4'>Get Started</button>
                </div>
            </div>    

            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-amber-400 text-amber-900 rounded-2xl text-sm'>Enterprise</span>
                <div className='flex flex-row justify-start'>
                    <p className='text-4xl font-bold py-4 flex'><button className='w-full'>Contact Us</button></p>
                </div>   
                <p className='text-2xl py-8 text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit ut, magni, dolores, officiis quidem atque distinctio doloremque minus officia quis nobis? Quia cum aut placeat recusandae qui animi autem.</p> 
                <div className='text-2xl relative'>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor</p>
                </div>
            </div>        
        </div> 
    </div>
  )
}

export default Pricing