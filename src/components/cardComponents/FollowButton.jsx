import React from 'react'
import { GoPlusSmall } from 'react-icons/go';


function FollowButton({ title }) {
  return (
    <div>
        <div className='flex items-center gap-[2rem]'>
            <h1 className='text-white text-[24px] font-serif font-semibold tracking-2'>{title}</h1>
            <div className=' flex justify-center items-center
               w-[85px] h-[25px] text-[#fff] rounded-md
               border border-orange-400'>
                <GoPlusSmall className='w-5 h-5' color='#fff' />
                <p className='font-mono font-medium shadow-lg text-[16px]'>Follow</p>
            </div>
        </div>
    </div>
  )
}

export default FollowButton;