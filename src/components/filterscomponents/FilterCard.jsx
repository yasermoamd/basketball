import React, { useState } from 'react'
import { FcFilledFilter } from 'react-icons/fc';
import PortalModel from '../portal/PortalModel';
import styles from '../../assets/css/model.module.css';
import { FilterIconsButton } from './FilterIconsButton';
import  DropdowFilter  from './DropdownFilter';


function FilterCard() {
   const [ isOpen, setIsOpen ] = useState(false);
   const handleModel = () => {
     setIsOpen(!isOpen)
   }

  return (
    <div className='bg-[#202020] w-[320px] h-[50px] flex justify-between items-center'>
    <div className='flex justify-start gap-6 ml-3 hover:cursor-pointer' onClick={handleModel}>
       <FcFilledFilter className='w-6 h-6' />
       <h2 className='text-[15px] font-[Rubik-Bold] font-bold tracking-[2px] text-[#d8d8d8]'>Filter</h2>
       </div>

       <div className='flex justify-center'>
       <PortalModel open={isOpen} style={styles.filter_arrow_btn}>
            <DropdowFilter />
        </PortalModel>

       </div>
       <FilterIconsButton />
 </div>
  )
}


export default FilterCard


  
