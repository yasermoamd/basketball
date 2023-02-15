import React from 'react';
import user_data from '../../assets/data/user.data.json';


const UserCircleComponents = () => {
    return (
        <div className='flex gap-2'>
            {user_data.map((user) => (
                <div className="flex flex-col justify-center items-center gap-2" key={user.id}>
                        <div className='border-2 border-orange-500  rounded-full'>
                        <img  className='rounded-full w-[56px] h-[56px]' src={user.profileImage} title={user.username} alt={user.username} />
                            </div>
                       <div className='flex justify-center items-center flex-col gap-1'>
                          <h1  title={user.username} className='font-[Rubik-Medium] font-bold shadow-sm text-[12px] text-[#d8d8d8]'>{user.username}</h1>
                          <span title={user.title} className='font-[Rubik-Light] text-[9px] text-[#d8d8d8]'>{user.title}</span>
                        </div>
                </div>
            ))}
        </div>
    );
};

export default UserCircleComponents;