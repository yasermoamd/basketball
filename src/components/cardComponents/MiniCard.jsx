import React from 'react';


export default function MiniCard({ bg_color }) {
    return (
        <div className={`bg-[${bg_color}] flex justify-center text-center w-[70px] h-[50px] rounded-xl`}>
            <div className='flex text-center justify-center gap-2 items-center text-orange-400'>
                <div><h4 className='font-[Rubik-Light] font-semibold'>Feb</h4></div>
                <div><h4 className='font-[Rubik-Light] text-[14px]'>13</h4></div>
            </div>
        </div>
    );
}
