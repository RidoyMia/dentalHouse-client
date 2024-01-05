import React from 'react';
import loginlogo from "../../../imgages/Frame.png"
import Image from 'next/image';

const page = () => {
    return (
        <div className=' '>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>
              <div className='bg-[#07332F]'>
                 <Image src={loginlogo} className=''></Image>
              </div>
              <div className='bg-base-100'>
                <div className='  bg-gray-100 shadow-xl w-96 mx-auto border border-gray-300 rounded-2xl '>
                   <h1 className='text-xl py-5 text-center'>Sign Up to DentalCare</h1>
                </div>
              </div>
            </div>
        </div>
    );
};

export default page;