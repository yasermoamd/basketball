import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';
import { MoreNav } from './MoreNav';
import { sidebar_icons } from '../../assets/data/icons_data';
  

function Sidebar() {
  return (
    <div className='bg-[#282828] fixed tablet:h-full laptop:flex desktop:flex  mt-[4.3rem] w-[70px] h-full shadow-md hidden tablet:grid lg:grid'>
        <div className='flex flex-col gap-10 laptop:gap-7 justify-start items-center mt-4'>
              {
                  sidebar_icons.map((side) => (
                        <div className='flex flex-col justify-center items-center gap-2' key={side.id}>
                        <side.icon  className='w-[22px] h-[22px] mb-1 hover:cursor-pointer shadow-2xl' color='white'  />
                        <p className='font-serif text-[12px] hover:cursor-pointer text-[#c7c5c7]'>
                              <NavLink to={side.link}>{side.title}</NavLink>
                        </p>
                        </div>
                  ))
              }
              <div>
                    <MoreNav />
              </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Sidebar;


