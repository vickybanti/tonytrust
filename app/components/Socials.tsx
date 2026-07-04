"use client";

import { motion } from "framer-motion";
import React from "react";
import { Highlight } from "./ui/hero-highlight";
import {useRouter} from "next/navigation"
  import { useMediaQuery } from "../hooks/use-media-query";



 
export function Socials() {
  const isDesktop = useMediaQuery("(min-width: 912px)");

  const router = useRouter()
  return (
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={`2xl:py-32 lg:py-24 lg:mt-60 2xl:mt-1 flex h-full max-w-full ml-10 px-10 bg-white ${!isDesktop && 'px-2 ml-2 mt-10'}`}
      >
        <div className=" lg:grid lg:grid-cols-2 md:flex md:flex-col 2xl:gap-36 lg:gap-8">
        <div className="flex flex-col">
        <div className="text-3xl font-bold uppercase dark:text-black-400 text-white/50">
        
        <div className={`leading-[72px] font-bold md:text-2xl lg:text-3xl text-neutral-700 dark:text-white  lg:w-full md:w-1/2 `}>
        <h1 className={`text-3xl font-bold md:text-4xl ${!isDesktop && 'pr-7'}`}>Top notch <Highlight className="text-black dark:text-black"> petroleum products </Highlight>  delivery across the country.</h1>
           </div>
        

        </div>
        <div className={`flex font-extralight md:text-sm text-[#CC5500] py-10 text-lg `}>
        
        <p className={`pr-2 socialsFont`}>PMS</p>
             <p className="px-2 socialsFont">
                AGO </p>
             <p className="px-2 socialsFont"> ENGINE OIL</p>

        </div>
        

        <button onClick={()=>router.push("/contact")} className={`${!isDesktop && 'w-2/3'} 2xl:w-1/3 lg:w-1/2 flex justify-between p-4 text-white bg-[#CC5500] hover:text-[#CC5500] backdrop-blur-sm border border-white hover:bg-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(212,175,55,0.5)] text-sm transition duration-400`}>
       <span className="text-sm"> CONTACT US </span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512">
  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
</svg>
</button>            
          
        </div>

        <div className="grid grid-cols-2 2xl:gap-16 lg:gap-2 socialsGrid">
  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500] socialsImg">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=60012&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-lg font-semibold">25+</h3>
      <span className="text-sm text-black socialsFont">Achievements</span>
    </div>
  </div>

  {/* Second Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=37862&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-lg font-semibold">15+</h3>
      <span className="text-sm text-black socialsFont">years of experience</span>
    </div>
  </div>

   {/* Fourth Item */}
   <div className="flex items-center space-x-4 h-[100px]">
  <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
  <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=34520&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-lg font-semibold">300+</h3>
      <span className="text-sm text-black socialsFont">Service trucks</span>
    </div>
  </div>

  {/* Third Item */}
  <div className="flex items-center space-x-4 h-[100px]">
  <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
  <img
        className="object-contain w-full h-full animate-pulse"
        src="https://img.icons8.com/?size=100&id=uLaytFdQhTaZ&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-lg font-semibold">700+</h3>
      <span className="text-sm text-black socialsFont">Happy clients</span>
    </div>
  </div>

 


        </div>

        
        </div>
      </motion.div>
  );
}
