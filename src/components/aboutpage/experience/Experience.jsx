import React from 'react';
import { myskills} from './api-exp.js';


const Experience = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full py-20'>
        <div>
            <h2 className='text-3xl font-semibold inline border-b-4 border-[#585959]' data-aos="fade-down-right" data-aos-duration="2000">Experience</h2>
            <p className='py-5' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">these are the technologies i've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {myskills.map((items, id) => {
                return (
                <div className='shadow-md shadow-[#1F6299] hover:scale-110 duration-300' key={id}>
                    <img src={items.icon} alt={items.name} className='w-20 mx-auto' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"  data-aos-duration="2000"/>
                    <p className='my-4' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="250">{items.name}</p>
                </div>

                )

            })}
            
        </div>
        
    </div>
  )
}

export default Experience