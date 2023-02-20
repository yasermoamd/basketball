import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom"
import AppContext from "../../context/AppContext";

function PodcastsPreview() {
    const { slug  } = useParams;
    return (
        <main className='flex justify-center'>
          <section className='laptop:mt-[5.4rem] laptop:ml-[5rem] desktop:ml-[20rem]'>
            <h1>URL {slug }</h1>          
          </section>
        </main>
    )
}


export default PodcastsPreview;