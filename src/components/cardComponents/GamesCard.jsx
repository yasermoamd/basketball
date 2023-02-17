import React from 'react' 

function GamesCard({ bg_color }) {
  return (
    <div className={`bg-[${bg_color}] w-[180px] h-[50px] rounded-xl`}>
       <div className='flex justify-center items-center gap-3'>
        <div className='flex flex-col justify-center items-center mt-1'>
            <img width={22} height={22} className='w-[22px]' src='https://cdn.basketballnews.com/fit-in/36x0/filters:strip_exif():filters:quality(95)/imgs/nba-logos/hou.png' alt='' />
            <img width={22}  height={22} className='w-[22px]' src='https://cdn.basketballnews.com/fit-in/36x0/filters:strip_exif():filters:quality(95)/images/nba-logos/cle.png' alt='' />
        </div>
       <div className='flex flex-col justify-center mt-1'>
            <span className='font-bold font-[Rubik-Light] shadow-md text-[#d8d8d8] text-[13px]'>ALST</span>
            <span className='font-bold font-[Rubik-Light] shadow-md text-[#d8d8d8] text-[13px]'>MVSU</span>
        </div>
        <div className='flex flex-col mt-1 justify-center items-center'>
            <span className='text-[#d8d8d8] text-sm'>11:30PM</span>
            <span className='text-[#d8d8d8] text-sm'>Feb 13</span>
        </div>
       </div>
    </div>
  )
}

export default GamesCard;

