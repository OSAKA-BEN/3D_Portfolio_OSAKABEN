import  { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto' style={{ backgroundImage: 'url("src/assets/hero-bg.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-secondary`}>Hi, I'm <span className='text-accent'>Benjamin GUIGANTON</span></h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Web & Mobile Developper
          </p>
        </div>
      </div>

    <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <div className='flex flex-row gap-5 mt-5'>
          <a href='https://www.linkedin.com/in/benjamin-guiganton-607123272/' target='_blank' rel='noopener noreferrer' className='cursor-pointer'><img src='src/assets/linkdin.png' alt='linkdin' className='w-[40px]' /></a>
          <a href='https://github.com/OSAKA-BEN' rel='noopener noreferrer' target='_blank' className='cursor-pointer'><img src='src/assets/github.png' alt='github' className='w-[40px]' /></a>
          <a href='https://www.instagram.com/osaka_ben/' rel='noopener noreferrer' target='_blank' className='cursor-pointer'><img src='src/assets/instagram.png' alt='instagram' className='w-[40px]' /></a>
          <a href='path_to_CV.pdf' download='CV_Benjamin_Guiganton'>CV</a>
        </div>

        {/* <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a> */}
      </div>

    </section>   
  )
}

export default Hero
