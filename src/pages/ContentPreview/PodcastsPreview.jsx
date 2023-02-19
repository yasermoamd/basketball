import { useParams } from "react-router-dom"

function PodcastsPreview() {
    const { title  } = useParams;

    return (
        <main className='flex justify-center'>
          <section className='laptop:mt-[5.4rem] laptop:ml-[5rem] desktop:ml-[20rem]'>
             <h1 className='text-white'>User title  is {title }</h1>                        
          </section>
        </main>
    )
}


export default PodcastsPreview;