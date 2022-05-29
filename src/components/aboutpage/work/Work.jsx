import React from 'react';
import { image } from './workapi';

const Work = () => {



  return (
    <div className='max-w-[1000px] mx-auto p-4 pb-20 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <h2 className='text-3xl font-semibold inline border-b-4 border-[#585959]'>Works</h2>
            <p className='py-5'>Checkout some of my recent work</p>
        </div>

        <div className='grid content-center sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {image.map((index, id) => {
                return (
                    <div className='relative flex justify-center align-center' key={id}>
                        <img src={index.img} alt="work1" className='w-full' />
                        <div className='absolute top-0 w-full h-full flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 opacity-0 transition duration-500 ease-in-out delay-75 hover:opacity-100 shadow-[#1F6299]'>
                            <a href={index.linkdemo}><button className='px-6 py-3 mx-2 border-2 rounded-lg'>Code</button></a>
                            <a href={index.linkdemo}><button className='px-6 py-3 mx-2 border-2 rounded-lg'>Demo</button></a>
                        </div>
                    </div>

                )
            })}
            
            
            
            
    
        </div>
    </div>
  )
}

export default Work