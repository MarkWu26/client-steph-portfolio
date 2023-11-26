import React from 'react'
import WorkSlider from './WorkSlider'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants';
import { useEffect } from 'react';

const Portfolio = () => {

  

  return (
    <div className='flex flex-row  h-[100vh] bg-white py-[140px]'
    id="portfolioSection"
    >
      <div className='flex w-[50%] ml-[175px] flex-col gap-y-6 py-4'>
        <motion.div className='text-[50px] font-bold'
         initial="hidden" 
         animate="show" 
         variants={fadeIn('right', 0.3)}
        >
        My Work <span className='text-blue-500'>.</span>
        </motion.div>
        <motion.div className='w-[70%] text-[18px] text-[#1e1e1e] text-opacity-70'
          initial="hidden" 
          animate="show" 
          variants={fadeIn('right', 0.6)}
        >
          Explore my portfolio: A showcase of Diverse projects highlighting creativity, innovation, and dedication to excellence.
        </motion.div>
      </div>
      <div className='flex w-[50%] mr-[175px]'>
      <WorkSlider/>
      </div>
    </div>
  )
}

export default Portfolio