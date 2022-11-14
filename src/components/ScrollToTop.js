import React from 'react'
import { Link } from 'react-scroll'
import { BiArrowFromBottom } from 'react-icons/bi'

const ScrollToTop = ({isToTopVisible}) => {
  return (
    <div className='fixed z-10 bottom-2 right-2'>
        <button className={isToTopVisible ? 'opacity:100 px-4 py-4 rounded-full': 'opacity-0'}>     
            <Link activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-25}
                duration={500}
                delay={300}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}>
                    <p className='text-center font-bold'><BiArrowFromBottom className="h-6 w-6" aria-hidden="true" /></p>
            </Link>
        </button>
    </div>
  )
}

export default ScrollToTop