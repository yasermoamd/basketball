import React from 'react'
import { useState } from 'react';
import { BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const basketball_news_list = [
{ id: 1, title: "Home",link:"#"},
{ id: 2, title: "Podcasts",link:"#"},
{ id: 3, title: "Scores",link:"#"},
{ id: 4, title: "Draft",link:"#"},
{ id: 5, title: "Stats",link:"#"},
{ id: 6, title: "News",link:"#"},
{ id: 7, title: "Charts",link:"#"}
]

const contactus_list = [
{id: 1, title:"Contact Us", link:"#" },
{ id: 2, title:"Advertise With Us" , link:"#"},
{ id: 3, title:"Terms Of Use" , link:"#"},
{ id: 4, title:"Privacy Policy" , link:"#"},
{ id: 5, title:"Do Not Sell My Personal Information", link:"#" },
{ id: 6, title:"Cookie Policy" , link:"#"}
];
function Footer() {
  const [email, setEmail ] = useState("");
  
 
  // handle news letter email
  const handleNewsLetterEmail = (e) => {
    setEmail(e.target.value);
    // type your code here .....
  }
  const handleEmailSubmit = () => {
    // handle your email submit .....
 
  }
  return (
    <main className='bg-[#282828] desktop:w-[50rem] desktop:h-[40rem] mb-[4rem] shadow-md rounded-md'>
         {FooterFirstSection()}
        {FooterNavMenu()}
        {FooterSocialIcon()}

    </main>
  )

  function FooterSocialIcon() {
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
        <p className='text-[#797979] text-[12px]'>Copyright © BasketballNews.com 2023. All Rights Reserved.</p>
      </div>
    </div>;
  }

  function FooterNavMenu() {
    return <div className='border-t border-[#797979] mx-[3.5rem] mt-4 flex justify-between'>

      <div className='mt-4 flex flex-col ga-2'>
        <h1 className='font-bold text-[18px] font-[Rubik-Light] text-[#d8d8d8]'>Basketball News</h1>
        {basketball_news_list.map((bask) => (
          <div key={bask.id}>
            <NavLink className='text-[#797979] text-[13px]' to={bask.link}>{bask.title}</NavLink>
          </div>
        ))}
      </div>
      <div className='mt-4 flex flex-col ga-2'>
        <h1 className='font-bold text-[18px] font-[Rubik-Light] text-[#d8d8d8]'>Contact</h1>
        {contactus_list.map((conatct) => (
          <div key={conatct.id}>
            <NavLink className='text-[#797979] text-[13px]' to={conatct.link}>{conatct.title}</NavLink>
          </div>
        ))}
      </div>
    </div>;
  }

  function FooterFirstSection() {
    return <section className='flex justify-between items-center mx-8'>
      <div className='flex flex-col justify-center items-center gap-4 mt-4'>
        <h2 className='font-bold text-[#d8d8d8] text-[18px]'>Subscribe to our newsletter</h2>
        <div className='flex gap-4 justify-center items-center' title='News letter form'>
          <div className=' border border-[#d8d8d8] w-[350px] h-[50px] bg-transparent'>
            <input
              value={email}
              onChange={handleNewsLetterEmail}
              className='w-[350px] h-[48px] bg-transparent outline-none text-[#d8d8d8] font-bold tracking-[1px] pl-2 text-[15px]'
              type="text"
              name=""
              id="" />
          </div>
          <button
            className='bg-orange-400 w-[140px] h-[50px] rounded-md uppercase font-bold '
            onClick={handleEmailSubmit}
            type="submit">
            Subscribe
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-4 mt-12'>
        <h2 className='font-bold text-[#d8d8d8] text-[18px]'>Follow Us</h2>
        <div className='flex gap-4'>
          <BsYoutube className='w-6 h-6 text-[#d8d8d8]' />
          <BsTwitter className='w-6 h-6 text-[#d8d8d8]' />
          <BsInstagram className='w-6 h-6 text-[#d8d8d8]' />
        </div>
      </div>
    </section>;
  }
}

export default Footer