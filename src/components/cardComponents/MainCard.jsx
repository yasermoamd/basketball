import { FiShare } from 'react-icons/fi';

export default function MainCard() {
    return (
        <div className="
             flex flex-col justify-end gap-8
             bg-mainCard bg-no-repeat bg-contain laptop:w-[800px] laptop:h-[400px] laptop:p-4">
               <div className='bg-black bg-opacity-20 flex flex-col gap-[2rem]'>
               <div className='text-[#d8d8d8] font-bold text-2xl'>
                  <h1>Kevin Durant cheered by fans, says Suns have ‘all the pieces’
                       Kevin Durant cheered by fans, says Suns have ‘all the pieces’</h1>
               </div>
               <div className='flex justify-between mt-8 items-center tablet:mx-4'>
             <div className='flex tablet:flex-col laptop:flex laptop:flex-row laptop:gap-4 tablet:text-[#818181] text-[#818181]'>
              <div>
                <span>BY ASSOCIATED PRESS</span>
              </div>
              <div><span>43 MIN</span></div>
             </div>
             <div className=''>
                <FiShare className='w-6 h-6' color='#d8d8d8' />
             </div>
             </div>
               </div>
            </div>
    )
}