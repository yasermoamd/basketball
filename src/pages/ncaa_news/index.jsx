import  { MiniCard, Searchbar, FilterCard, NewsTitle, MoreNewsCard, PostCard, GamesCard } from "../../components";
import { MdKeyboardArrowRight } from 'react-icons/md';
import styles from './ncaa.module.css'

function NcaaNews() {
    return (
       <div className='flex '>
         <div className='laptop:mt-[4.4rem] laptop:ml-[5rem] desktop:ml-[20rem]'>
         
         <div className='my-4 flex gap-6 justify-start items-center'>
            <div><Searchbar /></div>
            <div><FilterCard/></div>
         </div>
         <div className="my-6">
            <NewsTitle title={'NCAA News'} />
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

         <div className='laptop:w-[78.5rem] laptop:mt-4 laptop:rounded-sm laptop:shadow-sm laptop:min-h-screen laptop:bg-[#282828]'>
         <div className='mx-6 pt-4'>
              <MoreNewsCard title={'More NCAA News Content'} />
         </div>
         <div className='mt-8 ml-2'>
            <PostCard style={[styles.post_card_laptop]} />
         </div>
      </div>

      {NewsPagination()}
         </div>
       </div>
    )
   
    function NewsPagination() {
      return <div className="flex justify-between items-center laptop:my-8">
         <div></div>
         <div className='flex justify-center'>
            <button className="border border-[#d8d8d8] w-[14rem] h-[3rem] flex justify-center items-center">
               <p className='font-medium text-[16px] text-[#d8d8d8]'>Next</p>
            </button>
         </div>
         <div className='flex justify-center items-center gap-2'>
            <div className='w-[4rem] h-[3rem] border border-[#050303] font-bold font-mono text-[#d8d8d8] flex justify-center items-center'>1</div>
            <div className='w-[4rem] h-[3rem] bg-[#282828] flex justify-center items-center'>
               <MdKeyboardArrowRight className='w-8 h-8' />
            </div>
            <div className='text-[#d8d8d8] font-serif text-[18px] mr-2'>1 of 22</div>
         </div>
      </div>;
   }

   }

export default NcaaNews
  