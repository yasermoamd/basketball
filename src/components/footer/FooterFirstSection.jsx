import React from 'react';
import { useState } from 'react';
import { BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';

export function FooterFirstSection() {
  const [email, setEmail] = useState("");


  // handle news letter email
  const handleNewsLetterEmail = (e) => {
    setEmail(e.target.value);
    // type your code here .....
  };
  const handleEmailSubmit = () => {
    // handle your email submit .....
  };
  return <section className='flex justify-around items-center'>
    <div className='flex flex-col justify-start items-center gap-4 mt-4'>
      <h2 className='font-bold flex justif-start text-[#d8d8d8] text-[18px]'>Subscribe to our newsletter</h2>
      <div className='flex gap-4 justify-center items-center' title='News letter form'>
        <div className=' border border-[#d8d8d8] laptop:w-[330px] desktop:w-[350px] h-[50px] bg-transparent'>
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
