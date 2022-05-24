import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const changeLink = useNavigate()

  return (
    <div className='w-full' style={{height:'85vh'}}>
      <div className='max-w-[1000px] justify-center mx-auto flex flex-col h-full px-8'>

        <p>Hi. My Name is</p>
        <h1 className='text-3xl sm:text-5xl font-bold'>Muhammad Rizki Akbar</h1>
        <h2 className='text-2xl sm:text-4xl font-bold text-[#8A8C8C]'>I'm a Front End Developer.</h2>
        <p className='text-[#8A8C8C] py-4 max-w-[700px]'>I build interactive websites that run across platforms & devices </p>
        <div>
          <button onClick={()=> changeLink("/About")} className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8A8C8C] border-[#8A8C8C]'>View Works</button>
        </div>
      </div>
    </div>
  )
}

export default Home