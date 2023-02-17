import MiniCard   from "../cardComponents/MiniCard";
import GamesCard from "../cardComponents/GamesCard";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function GamesViewList() {
    return (
        <div className='flex justify-center itesm-center'>
            <div 
                className='flex justify-center items-center bg-[#797979] w-[60px] h-[50px]  rounded-l-full  hover:cursor-pointer' 
                onClick={() => {}}>
                <IoIosArrowBack className='w-8 h-8' color='d8d8d8' />
            </div>
            <div className='flex mx-7 gap-4'>
                <div><MiniCard bg_color={"#181818"} /></div>
                <div className='flex gap-4'>
                    <GamesCard bg_color={"#181818"} />
                    <GamesCard bg_color={"#181818"} />
                    <GamesCard bg_color={"#181818"} />
                    <GamesCard bg_color={"#181818"} />
                </div>
            </div>
            <div  
                className='flex justify-center items-center bg-[#797979] w-[60px] h-[50px]  rounded-r-full hover:cursor-pointer' 
                onClick={() => {}}>
                <IoIosArrowForward className='w-8 h-8' color='d8d8d8' />
            </div>
        </div>
    )
}