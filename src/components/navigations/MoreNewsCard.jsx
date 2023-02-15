import {Link} from 'react-router-dom';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { more_news_icon } from '../../assets/data/icons_data';
 
function MoreNewsCard({ title }) {
  return (
    <div className='laptop:shadow-md bg-[#202020] laptop:w-[75rem] laptop:h-[8rem]'>
       <div className='flex flex-col gap-4'>
       <div className='flex justify-between items-center p-2'>
            <div className='ml-1'>
              <h1 className='text-white text-[18px] font-bold font-serif'>{title}</h1>
              </div>
                 <Link to='#'>
                    <IoIosArrowForward className='w-7 h-7' color='orange' />
                 </Link>
        </div>
        <div className='flex gap-[1.5rem] items-center ml-2'>
          {
            more_news_icon.map((more) => (
                 <div key={more.id}>
                  <more.icon className='w-7 h-7' color='#d8d8d8' />
                  <p className='font-bold text-[18px] text-[#d8d8d8]'>{more.title}</p>
                 </div>
            ))
          }
        </div>
        <hr className='w-[52rem] ml-4 ' color='#383838' />
       </div>
    </div>
  )
}

export default MoreNewsCard