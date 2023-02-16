import React from 'react' 
import {  FeaturedStaff, NewsPagination,  Footer, UserCircleComponents, PostCardList } from '../../components'; 
function Home() {
  return (
    
     <main className='flex flex-col gap-[10rem]'>
      <section className='
             desktop:ml-[20rem] desktop:mt-[4rem]
             laptop:ml-[4.5rem] laptop:mt-[4.2rem] tablet:ml-[6.5rem] tablet:mt-[4.6rem]'>
          <div className='desktop:w-[80rem] desktop:h-[80px] mb-[6rem] laptop:w-[78.5rem] laptop:mt-2 laptop:rounded-sm 
                laptop:shadow-sm  laptop:bg-[#282828]'>
                  <div className='flex flex-col gap-2 p-2 laptop:shadow-sm  laptop:bg-[#282828]'>
                  <div><FeaturedStaff title={'FEATURED STAFF'} /></div>
                   <div className='ml-4'>
                    <UserCircleComponents />
                 </div>
            </div>
            </div>

            <div className='laptop:w-[78.5rem] desktop:w-[80rem] desktop:h-[160rem]
            laptop:p-4 laptop:mt-1 laptop:rounded-sm laptop:shadow-sm laptop:min-h-screen laptop:bg-[#282828]'>
            <div className='p-4'>
                   <PostCardList minLength={0} maxLength={9} />
               </div>
            </div>
          <div className='desktop:flex desktop:justify-center laptop:flex laptop:justify-center'>
                 <NewsPagination />
              </div>
              <div className='desktop:ml-[12rem] desktop:mt-[4rem] laptop:mt-[4rem]'>
                 <Footer />
              </div>
      </section>
     </main>
  )
}

export default Home;