import React from 'react'
import { FiShare } from 'react-icons/fi';
import posts from '../../assets/data/posts.data.json';
import {Link} from 'react-router-dom';


function DraftsNewsCard() {
  return (
    <div className='laptop:grid laptop:grid-cols-1 laptop:gap-4'>
       {
        posts.map((post ) => (
             <div key={post.id}
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
         <img 
           
           className='
           sm:w-80 sm:h-40
           tablet:w-[200px] tablet:[260px]
           laptop:w-[393px] laptop:h-[200px]
           desktop:w-[390px] shadow-lg'
           title={post.title}
           src={post.postImg} alt={post.title} />
         </div>
       <div className='flex flex-col justify-between tablet:gap-[2rem] laptop:gap-[4rem]'>
         <div className='tablet:ml-2 tablet:mt-1 laptop:flex'>
              <div><h1 title={post.title} className='tablet:ml-3 tablet:text-[16px] tablet:font-[Rubik-Light] text-[#d8d8d8] tablet:font-bold
              laptop:font-bold laptop:font-[Rubik-Light] laptop:text-[24px]'>{post.title}</h1></div>
         </div>
         <div className='flex justify-between items-center tablet:mx-4'>
             <div className='flex tablet:flex-col laptop:flex laptop:flex-row laptop:gap-4 tablet:text-[#818181] text-[#818181]'>
              <div>
                <span>{post.postedBy}</span>
              </div>
              <div><span>{post.time}</span></div>
             </div>
             <div className=''>
                <FiShare className='w-6 h-6' color='#d8d8d8' />
             </div>
         </div>
        </div>
            </Link>
        </div>
        ))
       }
    </div>
  )
}

export default DraftsNewsCard;