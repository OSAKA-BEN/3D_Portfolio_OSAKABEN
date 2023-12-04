import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div variants={fadeIn("up", "spring", 0, 0.75)} className="flex flex-col md:flex-row">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-description text-justify text-[17px] max-w-3xl leading-[30px]'
        >
          I am a French professional who previously worked as a project manager in the field of naval construction. While I enjoyed this work, I had always been interested in the world of computer programming, so I made the decision to transition to web development. I completed an intensive six-month training program and have since become a junior developer. <br />

          As someone who enjoys challenges and creativity, I am always eager to learn new things and come up with inventive solutions. I believe my background in project management has given me valuable skills that I can apply to my work as a developer, including strong communication and organization skills. Overall, I am excited to continue growing and expanding my skills as a developer in this exciting and dynamic field.
        </motion.p>
        <img src="src/assets/profil-picture.png" alt="profile" className="p-10 h-96 w-96"/>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");