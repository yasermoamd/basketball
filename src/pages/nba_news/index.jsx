 import React from "react";
import {FilterCard, NewsTitle, Searchbar, GamesCard,  MiniCard } from "../../components";
 
function NbaNews() {
    return (
       <>
       <div className='flex '>
      <div className='laptop:mt-[4.4rem] laptop:ml-[5rem]'>
         {/* search bar and filter */}
         <div className='my-4 flex gap-6 justify-start items-center'>
            <div><Searchbar /></div>
            <div><FilterCard/></div>
         </div>
         <div className="my-6">
            <NewsTitle title={'NBA News'} />
         </div>
         <div className="flex">
          <div className='mr-8'><MiniCard /></div>
          <div className="flex gap-4"> 
               <GamesCard />
               <GamesCard />
               <GamesCard />
               <GamesCard />
               <GamesCard />
               <GamesCard />
            </div>
         </div>
      </div>
    </div>
    </>
    )
  }
  
  export default NbaNews