import React, { useState } from 'react'
import { GoPerson } from 'react-icons/go';
import PortalModel from '../portal/PortalModel';
import styles from './login.module.css';

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin ] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const handleLogin = () => {
    setIsLogin(!isLogin);
    setIsRegister(false);
  }
  const handleRegister = () => {
     setIsRegister(!isRegister);
     setIsLogin(false);
  }
 
  return (
    <div>
       <div className='flex justify-start items-center gap-4' onClick={() => setIsOpen(!isOpen)}>
            <GoPerson className='w-6 h-6 ml-1 mb-1 hover:cursor-pointer shadow-2xl' color='white' />
            <p className='font-sans font-medium text-[18px] hover:cursor-pointer text-[#c7c5c7]'>
              Login </p>
       </div>
      <PortalModel open={isOpen} style={styles.login_register_model}>
          <div className='flex flex-col'>
             <div className='flex justify-end'><p className='text-[24px] mr-4 text-[#d9d9d9] cursor-pointer' onClick={() => setIsOpen(!isOpen)}>X</p></div>
             <div className='flex flex-col gap-6'>
             <div className='flex justify-around items-center bg-[#d8d8d8] p-2'>
               <div className='text-[#797979] font-medium text-2xl' onClick={handleLogin}>Login</div>
               <div className='text-[#797979] font-medium text-2xl' onClick={handleRegister}>Register</div>
            </div>
            <div className='mt-8'>
                 <div className='flex flex-col justify-center items-center gap-6 mx-[2rem]'>
                    <input type="text" />
                    <input type="text" />
                    <button className='bg-[#d9d9d9] p-1 w-[60px] rounded-lg shadow-lg'>Login</button>
                 </div>
            </div>
             </div>
          </div>
          
      </PortalModel>
    </div>
  )
}

export default Login;