import  { MiniCard, Searchbar, FilterCard, FollowButton, MoreNewsCard, GamesCard, NewsPagination, Footer, PostCardList } from "../../components";
 

function NcaaNews() {
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
     
        <section className="flex">
         <div className='mr-8'><MiniCard /></div>
         <div className="flex gap-4"> 
               <GamesCard />
               <GamesCard />
               <GamesCard />
               <GamesCard />
               <GamesCard />
               <GamesCard />
            </div>
        </section>

        {/* news section */}
        <section className='
          desktop:w-[78.5rem] desktop:mt-4 desktop:rounded-sm desktop:shadow-sm desktop:max-h-screen desktop:bg-[#282828]
          laptop:w-[78.5rem] laptop:mt-4 laptop:rounded-sm laptop:shadow-sm laptop:min-h-screen laptop:bg-[#282828]'>
            <div className='mx-6 pt-4'>
              <MoreNewsCard title={'More NCAA News Content'} />
            </div>
            <div className='desktop:mt-8 desktop:p-4 laptop:p-4 laptop:mt-8'>
             <PostCardList minLength={0} maxLength={9} />
            </div>
            <div className='flex justify-center'>
                 <NewsPagination />
              </div>
         </section>
         <div className='flex justify-center laptop:mr-[12rem] mt-8'>
                 <Footer />
              </div>
         </section>
       </main>
    )
}

export default NcaaNews
   
  