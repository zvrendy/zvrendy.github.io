'use client'

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { fadeIn } from "@/variants";
import HeroButton from "@/components/hero-button";
import Avatar from "@/components/avatar";
import ParticlesContainer from "@/components/particles-container";


const HomePage = () => {
  return ( 
    <>
      <div className="bg-primary/60 h-full">
        {/* Hero Text */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* Hero Title */}
            <motion.h1
              variants={fadeIn('down', 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Selamat Datang...',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Sugeng Rawuh...',
                  1000,
                  'Benvenuto...',
                  1000,
                  '환 영 / hwan-yeong...',
                  1000,
                  
                ]}
                wrapper="span"
                speed={75}
                cursor={true}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
              
               <br /> {` `}
              <span className="text-green-500/80">Madfento</span>
            </motion.h1>
            <motion.p
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni nisi iure fuga, sit vitae exercitationem tempore impedit atque ea.
            </motion.p>
            <div className="flex justify-center xl:hidden relative z-10">
              <HeroButton/>
            </div>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <HeroButton/>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* Bg Image */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          {/* Particles */}
            <ParticlesContainer/>
          {/* Avatar Img */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
}
 
export default HomePage;