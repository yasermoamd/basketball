import React from 'react'
 
function DraftCard({number }) {
  return (
    <div className='bg-[#282828] w-[337px] p-2 h-[158px] rounded shadow-xl'>
      <div className='flex gap-5'>
        <div className='w-[142px] h-[158px]'>
            <img   className='w-[142px] h-[142px]' src="https://cdn.basketballnews.com/fit-in/1024x0/filters:strip_exif():filters:quality(95)/images/draft/usatsi_19178491-1-_edited_425w.jpg" alt="" />
        </div>
      <div className='flex flex-col gap-1'>
           <div className='flex gap-[4.5rem] justify-between items-center'> 
               <p className='text-[#d8d8d8] font-mono text-xl mt-2'>Victor</p>
               <p className='text-orange-500 font-bold font-mono text-[24px]'>{number}</p>
            </div>
        <div>
            <p className='font-semibold font-mono text-[#fff] text-[20px] tracking-[1px]'>Wembanyama</p>
            <p className='border-1 border-b border-[#f71d46]'></p>
        </div>
        <div className='flex flex-col text-[#797979] font-serif text-[15px]'>
            <p>B/F - Overtime Elite</p>
            <p>Professional - 2004</p>
            <p>6-7 / 202</p>
        </div>
      </div>
      </div>
      </div>
  )
}

export default DraftCard