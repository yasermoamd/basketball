import React from 'react' 
 import { PostCard, Staff } from '../../components' 
import  { MdKeyboardArrowRight} from 'react-icons/md';

function Home() {
  return (
    
     <main className='flex flex-col'>
      <div className='
             desktop:ml-[20rem] desktop:mt-[4rem]
             lg:ml-[15rem] 
             laptop:ml-[4.5rem] laptop:mt-[4.4rem] tablet:ml-[6.5rem] tablet:mt-[4.6rem]'>
        <div className='mb-2'>
          <Staff />
        </div>
        <div className='laptop:w-[78.5rem] desktop:w-[80rem] laptop:mt-2 laptop:rounded-sm laptop:shadow-sm laptop:min-h-screen laptop:bg-[#282828]'>
         <div className='p-4'>
          <PostCard />
         </div>
         </div>
         <div className='flex justify-center items-center'>{NewsPagination()}</div>
      </div>
     </main>
  )

  function NewsPagination() {
    return <div className="flex justify-around items-center desktop:gap-4 desktop:my-6 laptop:my-6">
       <div></div>
       <div className='flex justify-center hover:cursor-pointer '>
          <button className="border border-[#d8d8d8] w-[14rem] h-[3rem] flex justify-center items-center desktop:hover:bg-[#282828]">
             <p className='font-medium text-[16px] text-[#d8d8d8]'>Next</p>
          </button>
       </div>
       <div className='flex justify-center items-center gap-2 hover:cursor-pointer'>
          <div className='w-[4rem] h-[3rem] border border-[#050303] font-bold font-mono text-[#d8d8d8] hover:bg-[#d8d8d8] hover:rounded-md hover:font-mono hover:text-[#282828] flex justify-center items-center'>1</div>
          <div className='w-[4rem] h-[3rem] bg-[#282828] flex justify-center items-center'>
             <MdKeyboardArrowRight className='w-8 h-8 hover:text-[#d8d8d8]' />
          </div>
          <div className='text-[#d8d8d8] font-serif text-[18px] mr-2'>1 of 22</div>
       </div>
    </div>;
 }
}

export default Home