import { PodcastCard, FeaturedStaff } from "../../components"

  
function Podcasts() {
    return (
       <>
       <div className=''>
        <div className='
        grid grid-cols-1 justify-center items-center ml-[4rem]
        desktop:grid desktop:grid-cols-2 desktop:ml-[5rem] desktop:justify-center
        laptop:grid laptop:grid-cols-2 laptop:gap-[2rem] laptop:ml-[30vw]  laptop:justify-center laptop:items-center'> 
             <div className=''>
             <div className='mt-[4.8rem]'> 
                 <FeaturedStaff title={'PODCASTS'} />
                 </div>
             <div className="">
              <PodcastCard /></div>
             </div>
         </div> 
      </div>
    </>
    )
  }



  
  export default Podcasts