import React from 'react' 
import {  FeaturedStaff, NewsPagination,  Footer, UserCircleComponents } from '../../components' 
import PostCard from '../../components/cardComponents/PostCard';
 
function Home() {
  return (
    
     <main className='flex flex-col gap-[10rem]'>
      <section className='
             desktop:ml-[20rem] desktop:mt-[4rem]
             laptop:ml-[4.5rem] laptop:mt-[4.4rem] tablet:ml-[6.5rem] tablet:mt-[4.6rem]'>
                  <div className='desktop:w-[80rem] desktop:h-[80px] mb-[6rem] laptop:w-[78.5rem] laptop:mt-2 laptop:rounded-sm laptop:shadow-sm  laptop:bg-[#282828]'>
                  <div className='flex flex-col gap-2 p-2 laptop:shadow-sm  laptop:bg-[#282828]'>
                  <div><FeaturedStaff title={'FEATURED STAFF'} /></div>
                   <div className='ml-4'>
                    <UserCircleComponents />
                 </div>
            </div>
            <div className='laptop:w-[78.5rem] desktop:w-[80rem] desktop:h-[160rem] laptop:mt-2 laptop:rounded-sm laptop:shadow-sm laptop:max-h-screen laptop:bg-[#282828]'>
            <div className='p-4'>
                   <PostCard />
               </div>
               <div className='flex justify-center'>
                 <NewsPagination />
              </div>
              <div className='desktop:ml-[12rem] desktop:mt-[2rem]'>
                 <Footer />
              </div>
            </div>
          </div>
      </section>
     </main>
  )
}

export default Home;