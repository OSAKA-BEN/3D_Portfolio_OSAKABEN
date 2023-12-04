import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='group w-28 h-28 p-4 hover:border hover:cursor-pointer hover:scale-110 rounded-2xl bg-[#202329] overflow-hidden relative' key={technology.name}>
          <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <span className='text-white text-sm'>{technology.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");