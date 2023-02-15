import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

function DropdownFilter() {
   return (<div className='flex flex-col gap-6 ml-2'>
      <div className=''>
         <h1 className='text-[#d8d8d8] font-bold font-mono text-[18px]'>Top</h1>
      </div>
      <div className='flex justify-between items-center'>
         <h1 className='text-[#d8d8d8] font-bold font-mono text-[18px]'>Author</h1>
         <IoIosArrowForward className='w-7 h-7' color='#d8d8d8' />
      </div>
   </div>);
}

export default DropdownFilter;
