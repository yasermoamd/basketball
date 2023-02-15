import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import PortalModel from '../portal/PortalModel';
import { MoreNavItem } from './MoreNavItem';
import {  more_nav_icons } from "../../assets/data/icons_data";
import { icon_color } from '../../assets/colors/colors';
import styles from '../../assets/css/model.module.css';

export const MoreNav = () => {
      const [isOpen, setIsOpen] = useState(false);
      return (
            <>
                  <div className='flex flex-col justify-center items-center gap-2'>
                        <BsThreeDots className='w-[25px] h-[25px] hover:cursor-pointer shadow-2xl' color={icon_color} onClick={() => setIsOpen(!isOpen)} />
                        <p className='font-serif text-[12px] hover:cursor-pointer text-[#c7c5c7]'>More</p>
                  </div>
                  <PortalModel open={isOpen} style={styles.more_nav_style}>
                        <MoreNavItem more_nav_items={more_nav_icons} />
                  </PortalModel>
            </>

      );
};
