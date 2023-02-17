import React from 'react';


export function FooterSocialIcon() {
  return <div className='border-t border-[#797979] mx-[3.5rem] mt-4 flex gap-2 justify-center items-center flex-col'>
    <div className='flex flex-col justify-center  items-center'>
      <h1 className='font-bold font-[Rubik-Bold] text-2xl text-orange-400'>Download Our App!</h1>
      <p className='font-medium text-[17px] text-[#d8d8d8] tracking-[1px]'>Stay up-to-date on all things NBA</p>
    </div>
    <div className='flex gap-4 justify-center items-center'>
      <img title='Download Our IOS App Link' src="https://cdn.basketballnews.com/fit-in/120x0/filters:strip_exif():filters:quality(95)/images/assets/app_store_badge.svg" alt="" />
      <img title='DownLoad Our Android App Link' src="https://cdn.basketballnews.com/fit-in/120x0/filters:strip_exif():filters:quality(95)/images/assets/google_play_badge.png" alt="" />
    </div>
    <div className='flex flex-col justify-center items-center mt-[8rem]'>
      <p className='text-[#797979] text-[12px] mb-4'>Copyright © BasketballNews.com 2023. All Rights Reserved.</p>
    </div>
  </div>;
}
