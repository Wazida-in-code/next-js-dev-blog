import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-violet-300 to-blue-100">
      <div className='items-center grid text-center justify-center'>
        <h1 className='bg-gradient-to-r from-blue-950 to-violet-900 bg-clip-text text-transparent font-bold text-6xl  mt-[50px]'>
        Welcome to DevBlogs!</h1>
        <p className='text-4xl text-cyan-900 font-bold mt-4 '>This is a mini blog of <span className='text-pink-700'>Wazida&apos;s</span> Learning Journey</p>
      </div>

      <div className='w-11/12 mx-auto mt-[80px]'>
        <h2 className='mt-10 ml-16'><span className='text-purple-800 text-3xl font-extrabold'>Hi, I&apos;m Wazida Momtaz Esha. <br/></span>
          </h2>
            
            <div className='flex justify-between'>
              <p className='mt-6 ml-16 text-fuchsia-900 text-2xl font-semibold'>I&apos;m passionate about web development. Every day,<br/> I learn something new, explore new technologies, <br/> and build projects to grow my skills.
              </p>

              <Image className='mr-[120px] mb-5 mt-0 rounded-2xl' src="/forger.jpg" width={200} height={110} alt='me'></Image>
            </div>
      </div>
    </div>
  );
};

export default page;