import React from 'react'
import { BiPodcast, BiHomeAlt, BiNews, BiBarChartAlt, BiAtom } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

function BottomNavigation() {
  return (
    <div className='bg-[#282828] block fixed inset-x-0 bottom-0 z-10 sm:fixed tablet:hidden laptop:hidden desktop:hidden h-[4.5rem] w-full p-1 shadow-md'>
        <div className='grid grid-cols-5 justify-center items-center'>
        <NavLink to='/'>
            <div className='mt-2 flex flex-col items-center cursor-pointer '>
                <BiHomeAlt className='w-8 h-8' color='white'  />
                <p className='font-semibold text-white'>Home</p>
            </div>
            </NavLink>
            <NavLink to='#'>
            <div className='mt-2 flex flex-col items-center cursor-pointer '>
                <BiPodcast className='w-8 h-8' color='white'  />
                <p className='font-semibold text-white'>Podcast</p>
            </div>
            </NavLink>
            <NavLink to='#'>
            <div className='mt-2 flex flex-col items-center cursor-pointer '>
                <BiNews className='w-8 h-8' color='white'  />
                <p className='font-semibold text-white'>News</p>
            </div>
            </NavLink>
            <NavLink to='#'>
            <div className='mt-2 flex flex-col items-center cursor-pointer '>
                <BiBarChartAlt className='w-8 h-8' color='white'  />
                <p className='font-semibold text-white'>Stats</p>
            </div>
            </NavLink>
            <NavLink to='#'>
            <div className='mt-2 flex flex-col items-center cursor-pointer '>
                <BiAtom className='w-8 h-8' color='white'  />
                <p className='font-semibold text-white'>Teams</p>
            </div>
            </NavLink>
        </div>
    </div>
  )
}

export default BottomNavigation