import { PodcastCard, FeaturedStaff, Footer } from "../../components"

  
function Podcasts() {
    return (
       <>
       <div className=''>
        <div className='
        grid grid-cols-1 justify-center items-center ml-[4rem]
        desktop:flex desktop:justify-center desktop:flex-col
        laptop:grid laptop:grid-cols-2 laptop:gap-[2rem] laptop:ml-[5rem]  laptop:justify-center laptop:items-center'> 
             <div className=''>
             <div className='mt-[4.8rem]'> 
                 <FeaturedStaff title={'PODCASTS'} />
                 </div>
             <div className="podcast_card">
              <PodcastCard /></div>
             </div>
             <div className="footer">
                <Footer />
             </div>
         </div> 
      </div>
    </>
    )
  }



  
  export default Podcasts