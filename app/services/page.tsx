'use client'

import Bulb from "@/components/bulb";
import Circles from "@/components/circles";
import ServiceSlider from "@/components/service-slider";

import { motion } from 'framer-motion'
import { fadeIn } from "@/variants";

const ServicesPage = () => {
  return ( 
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque enim soluta quos voluptate numquam, harum suscipit debitis quidem quasi? Tenetur!
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full xl:max-w-[75%]"
          >
            <ServiceSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
   );
}
 
export default ServicesPage;