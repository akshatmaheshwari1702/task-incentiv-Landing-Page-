import React from 'react';
import Frame4 from '../../Assests/Frame4.png';
import Frame5 from '../../Assests/Frame5.png';


const Header = () => {
  return (
    <div className='bg-black text-gray-400 p-16 pb-32 flex gap-8'>
        <div className='w-1/2 p-8 text-left'>
            <h1 className='text-4xl leading-normal mb-4'>Streamline How<br></br> You Manage <span className='text-white'>ESOPs</span></h1>
            <p className='text-lg mb-4'>Incentive offers an easy way for employers to issue ESOPs/grants, and allow employees to easily accept,track, exercise, and sell their granted shares.</p>
            <button className='text-base py-2 px-12 font-mono font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-md my-4'>Request Demo</button>
        </div>
        <div className='flex p-4 relative gap-4'>
            <img src={Frame4} alt="" className='w-64 h-80'/>
              <img src={Frame5} alt="" className='w-80 h-90 absolute top-32 left-72' />
        </div>
    </div>
  )
}

export default Header
