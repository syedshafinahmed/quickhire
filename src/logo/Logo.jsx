import React from 'react';
import logo from '../assets/logo.png'
const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <img className='h-9' src={logo} alt="" />
      <p className='text-[#25324B] rhd font-bold text-2xl tracking-tight'>QuickHire</p>
    </div>
  );
};

export default Logo;