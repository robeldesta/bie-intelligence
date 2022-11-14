import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaTelegram,

} from 'react-icons/fa'

const Footer = () => {
const d = new Date(Date.now())
let year = d.getFullYear()
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 gap-3 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2 border-b-2'>Services</h6>
                <ul>
                    <li className='py-1'>Market Data</li>
                    <li className='py-1'>Insights</li>
                    <li className='py-1'>Outlooks</li>
                    <li className='py-1'>Business Info Ethiopia</li>
                    <li className='py-1'>Industy Intelligence and Advisory</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2 border-b-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Research and Analysis</li>
                    <li className='py-1'>Digital Marketing</li>
                    <li className='py-1'>Web Development</li>
                    <li className='py-1'>Mobile Development</li>
                    <li className='py-1'>Software as a Service</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2 border-b-2'>Company</h6>
                <ul>
                    <li className='py-1'>What We Do</li>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Team</li>
                    <li className='py-1'>Careers</li>
                    <li className='py-1'>Marketing</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2 border-b-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to out newsletter</p>
                <p className='py-4'>Latest business updates right to your inbox</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email...'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-[1240px] px-2 py-4 m-auto items-center justify-between sm:flex-row text-center text-gra-500'>
            <p className='py-4'>{year} BIE INTELLIGENCE PLC. All Rights Reserved</p>
            <div className='flex justify-between  sm:w-[300px] pt4 text-2xl'>
                <FaFacebook className='mr-2' />
                <FaTwitter className='mr-2' />
                <FaLinkedin className='mr-2' />
                <FaInstagram className='mr-2' />
                <FaTelegram className='mr-2' />    
            </div>    
        </div>        
    </div>
  )
}

export default Footer