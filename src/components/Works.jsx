import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  url_site,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#1d1836] p-4 rounded-2xl sm:w-[360px] w-full hover:border h-[480px]'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='w-10 h-10 flex justify-center items-center '
            >
            { source_code_link ? <img
                src={github}
                alt='source code'
                className='w-full h-full object-contain cursor-pointer hover:border rounded-full bg-black'
              /> : null}
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <a href={url_site} alt={name} target='_blank' rel='noopener noreferrer'><h3 className='text-white font-bold text-[24px] nav-item cursor-pointer'>{name}</h3></a>
          <p className='mt-2 text-description text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <div className='flex justify-center items-center' key={`${name}-${tag.name}`}>
            <img
              src={tag.icon}
              alt={tag.name}
              className='h-4'
            />
            <p className='text-description text-[14px]'>{tag.name}</p>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-description text-[17px] max-w-3xl leading-[30px]'
        >
          Each project reflects my ability to solve problems, work with different technologies and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");