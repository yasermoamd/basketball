import React from 'react' 

function FeaturedStaff({ title }) {
  return (
    <div className='flex items-center gap-4'>
          <div className='bg-orange-500 w-[10px] h-[22px]'></div>
          <div>
            <h1 className='font-bold font-sans text-xl text-white uppercase'>
               {title}
            </h1>
          </div>
        </div>
  )
}

export default FeaturedStaff;

