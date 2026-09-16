import Image from 'next/image';
import React from 'react';

const NotFound = () => {
    return (
        <div className='bg-blue-900 min-h-screen w-full'>
            <h1 className='pt-[20px] pb-5 pl-[290px] font-extrabold text-5xl text-white'>THIS PAGE IS NOT FOUND!</h1>

            <Image
                    src="https://plus.unsplash.com/premium_vector-1760397617573-581cacf6f88d"
                    alt="404 Error"
                    width={900}
                    height={100}
                    className="ml-[200px] pl-[40px] w-[800px] h-[400px] object-cover"
                  />
        </div>
    );
};

export default NotFound;