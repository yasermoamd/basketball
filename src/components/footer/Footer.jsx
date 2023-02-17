import React from 'react'
import { Outlet } from 'react-router-dom';
import { FooterFirstSection } from './FooterFirstSection';
import { FooterNavMenu } from './FooterNavMenu';
import { FooterSocialIcon } from "./FooterSocialIcon";

function Footer() {
  return (
    <main className='
    laptop:w-[50rem] laptop:h-[40rem] laptop:mb-[4rem] laptop:ml-[12rem]
     bg-[#282828] desktop:w-[50rem] desktop:h-[40rem] mb-[4rem] shadow-md rounded-md'>
         <FooterFirstSection/>
         <FooterNavMenu />
         <FooterSocialIcon />
        <Outlet />
    </main>
  )
}

export default Footer



