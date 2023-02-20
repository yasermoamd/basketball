import {Link} from 'react-router-dom';
import React from 'react'
import { FiShare } from 'react-icons/fi';

function VideoCard({ posts, pagesVisited,  postPerPage }) {
  return (
    <div className='
     grid grid-cols-1 gap-[2rem] justify-center items-center p-3
     laptop:grid laptop:grid-cols-3 laptop:gap-[2rem]'>
             <div 
             className='
             w-[14rem] p-0 h-[16rem]
     sm:w-80 sm:h-[17rem]
     tablet:w-[200px] tablet:h-[265px]
     laptop:w-[393px] laptop:h-[23.5rem]
     desktop:w-[390px] desktop:h-[23.5rem]
    bg-[#282828] rounded-tablet shadow-xl
             '
             > 

            <Link to="#">
            <div>
         <video
            height={376}
            width={390}
            className=''
             title={'Mac McClung has won the 2023 AT&T Slam Dunk Contest with a multiple perfect score performance'}>
             <source src='https://www.youtube.com/watch?v=awLQ_A33H9Y' type='video/mp4'></source>
           </video>
         </div>
       <div className='flex flex-col justify-between tablet:gap-[1.8rem] laptop:gap-[3.7rem]'>
         <div className='tablet:ml-2 tablet:mt-1 laptop:flex'>
              <div><h1 title={'Mac McClung has won the 2023 AT&T Slam Dunk Contest with a multiple perfect score performance'} className='tablet:ml-3 tablet:text-[16px] tablet:font-[Rubik-Light] text-[#d8d8d8] tablet:font-bold
              laptop:font-bold laptop:font-[Rubik-Light] laptop:text-[24px]'>Mac McClung has won the 2023 AT&T</h1></div>
         </div>
         <div className='flex justify-between items-center tablet:mx-4'>
             <div className='flex tablet:flex-col laptop:flex laptop:flex-row laptop:gap-4 tablet:text-[#818181] text-[#818181]'>
              <div>
                <span>NBA Youtube</span>
              </div>
              <div><span>22 Day ago</span></div>
             </div>
             <div className=''>
                <FiShare className='w-6 h-6' color='#d8d8d8' />
             </div>
         </div>
        </div>
            </Link>
        </div>
    </div>
  )
}

export default VideoCard;