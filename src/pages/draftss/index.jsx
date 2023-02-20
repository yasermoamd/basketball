import React  from 'react'
import {DraftCard, FeaturedStaff, RandomImage, DraftsNewsCard, Footer } from '../../components';
 
function Draftss() {
 
  return (
    <div className='laptop:flex laptop:flex-col laptop:justify-between laptop:items-center laptop:container laptop:mx-auto'>
     <div className='laptop:ml-[4.4rem] mt-4 flex  gap-4 p-2 desktop:ml-[8rem]'>
      <section className='flex flex-col gap-4'>
      <div className='bg-[#202020] w-[820px] desktop:min-h-screen  laptop:min-h-screen  laptop:ml[4.5rem] laptop:mt-[3.9rem]'>
        
        <div className='my-4'> <FeaturedStaff title={'Featured Staff'} /></div>
        <div className='my-2 p-4'><RandomImage /></div>

        <div className='flex justify-end laptop:mr-[3rem] laptop:my-[1rem]'>
          <p className='text-[#797979] font-serif text-[18px]'>Updated: Nov 28 2022</p></div>

        
          <div className='grid grid-cols-2 gap-4 laptop:ml-8'>
           <DraftCard number={'01'} />
           <DraftCard number={'02'} />
           <DraftCard number={'03'} />
           <DraftCard number={'04'} />
           <DraftCard number={'05'} />
           <DraftCard number={'06'} />
        </div>
        <div className='desktop:flex desktop:justify-center desktop:mt-[3rem] desktop:mb-2'>
          <button className='bg-[#d8d8d8c7] text-black p-2 rounded-sm shadow-lg'>Load More</button>
      </div>
      </div>
      
       <div className='laptop:grid laptop:grid-cols-1 laptop:gap-4 desktop:grid desktop:grid-cols-2 desktop:gap-6 bg-[#202020] desktop:w-[820px] desktop:min-h-screen desktop:p-4'>
          <DraftsNewsCard />
          <DraftsNewsCard />
          </div>

      </section>

      <div className='bg-[#202020] w-[433px]  laptop:min-h-screen p-5 laptop:ml[4rem] laptop:mt-[3.9rem]'>
      <div className='mb-4'> 
           <FeaturedStaff title={'DRAFT NEWS'} />
      </div>
      <div className='laptop:grid laptop:grid-cols-1 laptop:gap-4 desktop:grid desktop:grid-cols-1 desktop:gap-4'>
          <DraftsNewsCard />
          </div>
      </div>
    </div>
    <div className='desktop:mt-[4rem] laptop:mt-[4rem] laptop:mr-[6em]'>
          <Footer />
         </div>
    </div>
  )
}

export default Draftss;
