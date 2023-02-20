import React, { useEffect, useState} from "react";
import  { MiniCard, Searchbar, FilterCard, FollowButton, MoreNewsCard, GamesCard, Footer } from "../../components";
import postsJson from '../../assets/data/posts.data.json';
import PostCard from '../../components/cardComponents/PostCard';
import './ncaa.module.css';
import ReactPaginate from 'react-paginate';


function NcaaNews() {
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
      <main className="flex">
       <section className='laptop:mt-[4.4rem] laptop:ml-[5rem] desktop:ml-[20rem]'>
       <div className='my-4 flex gap-6 justify-start items-center'>
           <div><Searchbar /></div>
           <div><FilterCard/></div>
        </div>
        <div className="my-6">
           <FollowButton title={'NCAA News'} />
        </div>

        <section className="flex gap-2">
        <div className="flex gap-4"> 
                   <GamesCard bg_color={"#282828"} />
           </div>
           <div className='mr-8 flex gap-2'>
               <MiniCard bg_color={'#282828'} />
               <MiniCard bg_color={'#282828'} />
               <MiniCard bg_color={'#282828'} />
               <MiniCard bg_color={'#282828'} />
               <MiniCard bg_color={'#282828'} />
               <MiniCard bg_color={'#282828'} />
           </div>
       </section>

       {/* news section */}
       <section className='
         desktop:w-[78.5rem] desktop:mt-4 desktop:rounded-sm desktop:shadow-sm desktop:min-h-screen desktop:bg-[#282828]
         laptop:w-[78.5rem] laptop:mt-4 laptop:rounded-sm laptop:shadow-sm laptop:min-h-screen laptop:bg-[#282828]'>
           <div className='mx-6 pt-4'>
             <MoreNewsCard title={'More NCAA News Content'} />
           </div>
           <div className='desktop:mt-8 desktop:p-4 laptop:p-4'>
           <PostCard posts={posts} pagesVisited={pagesVisited} postPerPage={postPerPage} />
           </div>
        </section>
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

        <div className='laptop:mt-[4rem] laptop:ml-[2rem]'>
                <Footer />
             </div>
        </section>
      </main>
   )
 }

export default NcaaNews;


/*
 

*/
   
  