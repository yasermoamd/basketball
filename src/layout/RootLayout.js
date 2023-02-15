import React from 'react'
import {BottomNavigation, Navbar, Sidebar} from '../components';
import { Outlet } from 'react-router-dom';


export default function RootLayout( ) {
    return (
        <div className=" ">
       <div className='fixed w-full'><Navbar /></div>

       <div className='tablet'>
        <Sidebar />
       </div>
       
       <main>
            <Outlet />
        </main>

       <div>
        <BottomNavigation />
        </div>
         
        </div>
    )
}