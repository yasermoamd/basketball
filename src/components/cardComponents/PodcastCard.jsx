import { Link } from 'react-router-dom';
import React from 'react'
import podcast_data from '../../assets/data/podcasts.data.json'; 
 
function PodcastCard() {
  return (
    <div className="laptop:mt-4 laptop:grid laptop:grid-cols-2 laptop:gap-8 laptop:justify-center
          laptop:items-center desktop:gap-12">
    {
     podcast_data.map((pod) => {
      return (
        <div key={pod.id}>
          <div>
         <img className="w-[360px] h-[360px]" src={pod.imgUrl} alt={pod.title} title={pod.title} />
         </div>
         <div className="
         laptop:flex laptop:flex-col laptop:justify-center laptop:items-center
          desktop:flex desktop:flex-col desktop:justify-center desktop:items-center">
            <h1 className="text-white font-[Rubik-Light] text-[21px]">
             <Link to='#'>{pod.title}</Link>
            </h1>
            <h1 className="text-sm text-gray-400">{pod.description}</h1>
          </div>
        </div>
      )
     })
    }
 </div>
  )
}

export default PodcastCard