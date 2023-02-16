import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export  default function NewsPagination() {
   return (
      <div className="flex  gap-[5rem] items-center desktop:gap-4 desktop:my-6 laptop:my-6">
         <div className='flex justify-center hover:cursor-pointer '>
            <button className="border border-[#d8d8d8] w-[14rem] h-[3rem] flex justify-center items-center desktop:hover:bg-[#282828]">
               <p className='font-medium text-[16px] text-[#d8d8d8]'>Next</p>
            </button>
         </div>
         <div className='flex justify-center items-center gap-2 hover:cursor-pointer'>
            <div className='w-[4rem] h-[3rem] border border-[#050303] font-bold font-mono text-[#d8d8d8] hover:bg-[#d8d8d8] hover:rounded-md hover:font-mono hover:text-[#282828] rounded-md flex justify-center items-center  transition duration-150 ease-in-out'>1</div>
            <div className='w-[4rem] h-[3rem] bg-[#282828] flex justify-center items-center'>
               <MdKeyboardArrowRight className='w-8 h-8 hover:text-[#d8d8d8]' />
            </div>
            <div className='text-[#d8d8d8] font-serif text-[18px] mr-2'>1 of 22</div>
         </div>
      </div>
   );
}
