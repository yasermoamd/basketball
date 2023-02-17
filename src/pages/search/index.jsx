import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

function Search() {
  const [ searchTerm, setSearchTerm ] = useState("");
  const handleSearch = (e) => {
      // implement your code here ...
      setSearchTerm(e.target.value);
  }
  // w 503px
  // h 50px
return (
  <div className='laptop:flex '>
      <div className='w-[703px] h-[50px] border border-[#d8d8d8] flex justify-between items-center laptop:mt-[6rem] laptop:ml-[25vw]'>
          <input 
            value={searchTerm}
            onChange={handleSearch}
            className='w-[660px] h-[48px] bg-transparent outline-none pl-2 font-serif font-bold text-[17px] text-[#d8d8d8]' type="text" />
          <FaSearch className='w-5 h-5 mr-4' color='#d8d8d8' />
      </div>
  </div>
)
}

export default Search