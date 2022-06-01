import React, { useEffect, useState } from 'react';
import { imageslider } from './slider-api';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

    const autoScroll = true;
    
    let slideindex;
    let intervaltime = 5000;


    const nextSlide = () => {
        if(currentSlide !== imageslider.length){
            setCurrentSlide(currentSlide + 1)
        } else if (currentSlide === imageslider.length){
            setCurrentSlide(1)
        }
    }

    function auto () {
        slideindex = setInterval(nextSlide,intervaltime);
    }

    useEffect(() => {
        setCurrentSlide(1);
    }, []);


    useEffect(() => {
        if(autoScroll) {
            auto();
        }
        return () => clearInterval(slideindex);
    });
  return (
    <div className='w-full h-[550px] flex flex-row overflow-hidden relative'>
      {imageslider.map((content, index) => {
        return (
          <div className={currentSlide === index + 1 ? 'w-full h-full opacity-100' : 'w-0 opacity-0'} key={index}>
            <img src={content.image} alt="" className='w-full h-full object-cover' />
          </div>
        )
      })}
    </div>
  )
}

export default Slider