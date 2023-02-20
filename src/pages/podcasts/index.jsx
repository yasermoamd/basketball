import { PodcastCard, FeaturedStaff, Footer } from "../../components"

  
function Podcasts() {
    return (
       <>
       <div className=''>
        <div className='
        grid grid-cols-1 justify-center items-center ml-[4rem]
        desktop:flex desktop:justify-center desktop:flex-col
        laptop:flex laptop:flex-col laptop:gap-[1rem] laptop:justify-center laptop:items-center'> 
             <div className='desktop:mt-[1.5rem]'>
             <div className='mt-[4.8rem]'> 
                 <FeaturedStaff title={'PODCASTS'} />
                 </div>
             <div className="podcast_card">
              <PodcastCard /></div>
             </div>
             <div className='laptop:mr-[11.5rem] laptop:mt-8'>
                <Footer />
             </div>
         </div> 
      </div>
    </>
    )
  }



  
  export default Podcasts