import React from 'react';


 const RandomImage = () => {
  return (
    <div className='flex flex-col justify-start'>
      <div>
        <img width={800} height={400} src='https://cdn.nba.com/manage/2023/02/tatum-grant-williams-talk.jpg?w=784&h=441' alt="" />
      </div>
      <div className='border- border-b-4 border-[#f71d46] w-[272px] cursor-pointer'>
        <h1 className='text-orange-600 text-[20px] font-serif font-semibold'>2023 NBA Draft Big Board</h1>
      </div>
    </div>
  );
};


export default RandomImage;