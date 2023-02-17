 import {Link, NavLink, Outlet} from 'react-router-dom';
import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import GamesViewList from '../listComponenets/GamesViewList';

function Navbar() {
  return (
    <div className='bg-[#282828] fixed
     w-full h-[80px] p-2'>
        <div className='flex justify-between content-center items-center md:mx-4 mt-2'>
            <AiOutlineMenu title='basket ball menu icon' className='w-8 h-8 sm:hidden tablet:hidden laptop:hidden desktop:hidden ' color='white' />
            <div> 
              <Link to='/'>
               <img 
                className='hover:cursor-pointer'
                title='basket ball news logo'
                src="https://cdn.basketballnews.com/fit-in/200x0/filters:strip_exif():filters:quality(95)/images/assets/BasketballNews-Beta%403x.png" alt="" />
                </Link>
              </div>
           <div className='flex flex-1 jusrify-center mx-8'>
              <div>
                 <GamesViewList />
                </div>
           </div>
           <NavLink to='/search'><AiOutlineSearch title='Search icon' className='w-8 h-8 hover:cursor-pointer' color='white' /></NavLink>
        </div>
        <Outlet />
    </div>
  )
}

export default Navbar