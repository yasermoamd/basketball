import React from 'react'
import {BottomNavigation, Navbar, Sidebar} from '../components';


export default function Layout({ children }) {
    return (
        <div className=" ">
            <div className='fixed w-full'><Navbar /></div>
            <div className='tablet'><Sidebar /></div>
              {children}
            <div><BottomNavigation /></div>
        </div>
    )
}