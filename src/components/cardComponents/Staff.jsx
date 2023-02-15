 import React from 'react'
import StaffImage from '../../assets/users/user_1.png'
export default function Staff() {
    return (
        <div className="bg-[#282828] h-[130px]">
           <div>
           <div className="flex gap-2 items-center">
                <div className='ml-4 w-[12px] h-[22px] bg-orange-400'></div>
                <div className='font-[Rubik-Medium] text-[22px] text-[#d8d8d8]'>FEATURED STAFF</div>
            </div>
            <div className="flex gap-4 ml-6">
                <CircleImage />
                <CircleImage />
                <CircleImage />
                <CircleImage />
                <CircleImage />
                <CircleImage />
                <CircleImage />
                <CircleImage />
            </div>
           </div>
        </div>
    )
}

const CircleImage = () => {
    return (
        <div className="flex justify-center flex-col gap-1">
            <div className="ml-2">
                <img   className={StaffImage} alt="" />
            </div>
            <div className='flex justify-center flex-col'>
                <h1 className='font-[Rubik-Bold] text-[13px] text-[#d8d8d8]'>Rex Chapman</h1>
                <span className='font-[Rubik-Medium] ml-2 text-[10px] text-[#d8d8d8]'>Podcaster</span>
            </div>
        </div>
    )
}