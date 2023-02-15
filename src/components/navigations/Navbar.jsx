 import {Link} from 'react-router-dom';
import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';

function Navbar() {
  return (
    <div className='bg-[#282828] fixed
     w-full h-[68px] p-2'>
        <div className='flex justify-between content-center items-center md:mx-4 mt-2'>
            <AiOutlineMenu title='basket ball menu icon' className='w-8 h-8 sm:hidden tablet:hidden laptop:hidden desktop:hidden ' color='white' />
           <Link href='/'>
           <img 
              className='hover:cursor-pointer'
             title='basket ball news logo'
             src="https://cdn.basketballnews.com/fit-in/200x0/filters:strip_exif():filters:quality(95)/images/assets/BasketballNews-Beta%403x.png" alt="" />
           </Link>
           <Link to='/search'><AiOutlineSearch title='Search icon' className='w-8 h-8 hover:cursor-pointer' color='white' /></Link>
        </div>
    </div>
  )
}

export default Navbar