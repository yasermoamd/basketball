import React, { useState } from 'react'
import { GoPerson } from 'react-icons/go';
import PortalModel from '../portal/PortalModel';


function Login() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
       <div className='flex justify-start items-center gap-4' onClick={() => setIsOpen(!isOpen)}>
            <GoPerson className='w-6 h-6 ml-1 mb-1 hover:cursor-pointer shadow-2xl' color='white' />
            <p className='font-sans font-medium text-[18px] hover:cursor-pointer text-[#c7c5c7]'>
              Login </p>
       </div>
      <PortalModel open={isOpen}>
          <LoginFourm />
      </PortalModel>
    </div>
  )
}

export default Login


const LoginFourm = () =>{return(<></>)}