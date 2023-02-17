import React from 'react';
import { NavLink } from 'react-router-dom';
import { contactus_list, footer_list } from "../../assets/data/footer_list";

export function FooterNavMenu() {
  return <div className='border-t border-[#797979] mx-[3.5rem] mt-4 flex justify-between'>

    <div className='mt-4 flex flex-col ga-2'>
      <h1 className='font-bold text-[18px] font-[Rubik-Light] text-[#d8d8d8]'>Basketball News</h1>
      {footer_list.map((bask) => (
        <div key={bask.id}>
          <NavLink className='text-[#797979] text-[13px] hover:underline' to={bask.link}>{bask.title}</NavLink>
        </div>
      ))}
    </div>
    <div className='mt-4 flex flex-col ga-2'>
      <h1 className='font-bold text-[18px] font-[Rubik-Light] text-[#d8d8d8]'>Contact</h1>
      {contactus_list.map((conatct) => (
        <div key={conatct.id}>
          <NavLink className='text-[#797979] text-[13px]  hover:underline' to={conatct.link}>{conatct.title}</NavLink>
        </div>
      ))}
    </div>
  </div>;
}
