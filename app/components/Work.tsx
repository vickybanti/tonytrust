"use client"
import React from 'react';
import { Highlight } from "./ui/hero-highlight";
  import { useMediaQuery } from "../hooks/use-media-query";



const Work = () => {
  const isDesktop = useMediaQuery("(min-width: 780px)");

  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url(/assets/2.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', 
      }}
      
    >
      <div className={`flex flex-col py-44 2xl:px-20 lg:px-20 bg-black/60 ${!isDesktop && 'work'}`}>
      <div className="flex flex-col w-full gap-4 leading-10 text-center uppercase md:text-left">
        <h2 className="font-semibold text-white text-md">What we do</h2>
        <h1 className="text-3xl font-bold md:text-4xl text-white/85 leading-relax workHeading">
          We know the <Highlight className="text-black dark:text-black">  ins and outs </Highlight> of petroleum products
        </h1>
        <div className='bg-black p-2 rounded-full lg:w-[54%] 2xl:w-[37%] shadow-lg'>
        <p className="text-[#CC5500] "> So you are assured of excellent product delivery nationwide
</p>
</div>
      </div>



      <div className={`grid grid-cols-2 gap-12 px-10 ${!isDesktop && 'workGrid'}`}>
  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
      <img
        className="object-contain w-full h-full "
        src="https://img.icons8.com/?size=100&id=7687&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Distribution</h3>
      <span className="text-sm text-white/80 workFontP">Distribution and wholesale supply of petroleum products.</span>
    </div>
  </div>

  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=9342&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Supply</h3>
      <span className="text-sm text-white/80 workFontP">Premium Motor Spirit (PMS) (Petrol)<br/> Automotive Gas Oil (AGO) (Diesel) <br/> Dual Purpose Kerosene (DPK) (Kerosene) <br/> Liquefied Petroleum Gas (LPG)</span>
    </div>
  </div>



  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=cQUE9D1CWfuG&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Bulk delivery</h3>
      <span className="text-sm text-white/80 workFontP">Bulk fuel delivery to filling stations, industries, factories, hotels, and commercial organizations.</span>
    </div>
  </div>



  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=102879&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Haulage</h3>
      <span className="text-sm text-white/80 workFontP">Petroleum product haulage using certified tanker trucks.</span>
    </div>
  </div>


  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=DRqAsQCxcDuW&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Supply Contracts</h3>
      <span className="text-sm text-white/80 workFontP">Fuel supply contracts for government agencies, corporate organizations, and private</span>
    </div>
  </div>


  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500] socialsImage">
      <img
        className="object-contain w-full h-full "
        src="https://img.icons8.com/?size=100&id=47076&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Fuel Storage</h3>
      <span className="text-sm text-white/80 workFontP">Fuel storage and inventory management solutions.</span>
    </div>
  </div>



  </div>


      </div>
    </div>
  );
};

export default Work;
