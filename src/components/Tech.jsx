import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologiesFront, technologiesBack, tools } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  
  return (
    <motion.div variants={fadeIn("up", "spring", 0, 0.75)}  className='flex flex-col sm:flex-row w-full gap-4'>
      <div className='flex flex-col flex-1'>
        <p className='text-description md:text-[30px] text-[24px] text-center p-4'>FRONTEND</p>
        <div className='flex flex-row flex-wrap gap-5 justify-center'>
          {technologiesFront.map((technology) => (
            <div className='group w-28 h-28 p-4 hover:border hover:cursor-pointer hover:scale-110 rounded-2xl bg-[#202329] overflow-hidden relative' key={technology.name}>
              <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white text-sm'>{technology.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <p className='text-description md:text-[30px] text-[24px] text-center p-4'>BACKEND</p>
        <div className='flex flex-row flex-wrap gap-5 justify-center'>
          {technologiesBack.map((technology) => (
            <div className='group w-28 h-28 p-4 hover:border hover:cursor-pointer hover:scale-110 rounded-2xl bg-[#202329] overflow-hidden relative' key={technology.name}>
              <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white text-sm'>{technology.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <p className='text-description md:text-[30px] text-[24px] text-center p-4'>TOOLS</p>
        <div className='flex flex-row flex-wrap gap-5 justify-center'>
          {tools.map((technology) => (
            <div className='group w-28 h-28 p-4 hover:border hover:cursor-pointer hover:scale-110 rounded-2xl bg-[#202329] overflow-hidden relative' key={technology.name}>
              <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white text-sm'>{technology.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");