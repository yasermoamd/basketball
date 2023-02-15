import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import PortalModel from '../portal/PortalModel';
import styles from '../../assets/css/model.module.css'; 
import DropdownFilter from './DropdownFilter';

export const FilterIconsButton = () => {
   const [isOpen, setIsOpen] = useState(false);
   const handleModel = () => {
      setIsOpen(!isOpen);
   };
   return (
      <>
         <button onClick={handleModel} className='bg-[#181818] border flex justify-center items-center border-[#282828] w-[50px] h-[50px]'>
            <IoIosArrowDown className='w-8 h-8' color='#d8d8d8' />
         </button>

         <PortalModel open={isOpen} style={styles.filter_arrow_btn}>
           <div> 
             <DropdownFilter />
           </div>
         </PortalModel>
      </>
   )
};
