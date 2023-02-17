import React, { useEffect, useState } from 'react' 
import { NewsCardList, FeaturedStaff,  Footer, UserCircleComponents, MainCard } from '../../components'; 
import postsJson from '../../assets/data/posts.data.json';
import ReactPaginate from 'react-paginate';
import PostCard from '../../components/cardComponents/PostCard';
import './home.css';

function Home() {
   const [posts, setPosts ] = useState([]);
   const [pageNumber, setPageNUmber ] = useState(0);

   const postPerPage = 9;
   const pagesVisited = pageNumber * postPerPage;
   useEffect(() => {
      setPosts(postsJson.slice(0, postsJson.length));
   }, [])
   const pageCount = Math.ceil(posts.length / postPerPage);
   const changePage = ({ selected }) => {
      setPageNUmber(selected);
   }
  return (
    
     <main className='flex flex-col gap-[10rem]'>
      <section className='
             desktop:ml-[20rem] desktop:mt-[4rem]
             laptop:ml-[4.5rem] laptop:mt-[4.8rem] tablet:ml-[6.5rem] tablet:mt-[4.6rem]'>
          <div className='desktop:w-[80rem] desktop:h-[80px] laptop:w-[78.5rem] laptop:mt-2 laptop:rounded-sm 
                laptop:shadow-sm  laptop:bg-[#282828]'>
                  <div className='flex flex-col gap-2 p-2 laptop:shadow-sm  laptop:bg-[#282828]'>
                  <div><FeaturedStaff title={'FEATURED STAFF'} /></div>
                   <div className='ml-4'>
                    <UserCircleComponents />
                 </div>
            </div>
          </div>

         <div className='
               flex gap-4 justify-center
               laptop:mt-[0.1rem] laptop:rounded-sm  laptop:w-[78.5rem]
               laptop:shadow-sm  laptop:bg-[#282828] laptop:p-4'>
           <div> 
              <MainCard />
            </div>
           <div>
              <NewsCardList  />
           </div>
         </div>

            <div className='laptop:w-[78.5rem] desktop:w-[80rem] desktop:h-min-h-screen
             laptop:mt-[0.1rem] laptop:rounded-sm laptop:shadow-sm laptop:min-h-screen laptop:bg-[#282828]'>
            <div className='laptop:p-2'>
                   <PostCard
                    posts={posts} 
                    postPerPage={postPerPage}
                    pagesVisited={pagesVisited} />
               </div>
            </div>
          <div className='desktop:flex desktop:justify-center laptop:flex laptop:justify-center laptop:mt-[2rem]'>
          <ReactPaginate
               previousLabel={'Previous'}
               nextLabel={'Next'}
               pageCount={pageCount}
               onPageChange={changePage}
               containerClassName={'paginationBttns'}
               previousLinkClassName={'previousBttn'}
               nextLinkClassName={'nextBttn'}
               disabledClassName={'paginationDisabled'}
               activeClassName={'paginationActive'}
      />
                    </div>
              <div className='desktop:ml-[12rem] desktop:mt-[4rem] laptop:mt-[4rem]'>
                 <Footer />
              </div>
      </section>
     </main>
  )
}

export default Home;