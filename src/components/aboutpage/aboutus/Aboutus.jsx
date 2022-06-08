import React from 'react';
import image from '../../../assets/abay1.png';

const Aboutus = () => {
  return (

        <div className='flex justify-center flex-col lg:flex-row md:flex-row w-full pt-10 '>
            <div className='w-full flex px-4 mb-10 lg:px-0 lg:mb-0 lg:w-[35%] md:w-1/2' data-aos="zoom-in-right" data-aos-duration="2000" data-aos-delay="300">
                <img src={image} alt="photome" className='mx-auto max-w-full' />
            </div>
            <div className='w-full flex flex-col px-4 lg:mx-5 md:mx-5 md:px-2 lg:px-5 lg:w-[42%] md:w-1/2' data-aos="zoom-in-left" data-aos-duration="2000" data-aos-delay="350">
                <h2 className='font-semibold text-3xl mt-5'>About Me</h2>
                <hr className='w-[150px] border-2 mb-3 border-[#585959]' />
                <p className=' py-2 loading-9 tracking-widest md:tracking-wider'>I am a front-end web developer with over a decade of experience. I can work on creating high-performance & rich interactive websites that work on all platforms & devices.</p>
                <p className='flex flex-col loading-9 tracking-widest md:tracking-wide'><span>As a front end developer,</span> i am used to making websites using a framework that makes it easy for me to build websites quickly. although i have no work experience about front-end developer but i am trying to learn to understand what is assigned to that part</p>
            </div>
            
        </div>


  )
}

export default Aboutus