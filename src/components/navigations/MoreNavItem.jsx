import {Link} from 'react-router-dom';
import React from 'react';
import {Login} from '../index';

export const MoreNavItem = ({ more_nav_items }) => {
      return (
            <div className='flex flex-col gap-[1.2rem] p-1'>
                  {more_nav_items.map((side) => (
                        <div className='flex justify-start items-center gap-4' key={side.id}>
                              <side.icon className='w-6 h-6 ml-1 mb-1 hover:cursor-pointer shadow-2xl' color='white' />
                              <p className='font-sans font-medium text-[18px] hover:cursor-pointer text-[#c7c5c7]'>
                                    <Link to={side.link}>{side.title}</Link>
                              </p>
                        </div>
                  ))}
               <div> <Login /></div>
            </div>
            
      );
};
