"use client"
import React from "react";
import { Meteors } from "./ui/meteors";
import { useMediaQuery } from "../hooks/use-media-query";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  
  const isDesktop = useMediaQuery("(min-width: 780px)");
  const isTablet = useMediaQuery("(min-width: 820px) and (max-width: 1024px)");


  
  return (
    <div
      className="container relative h-full max-w-full overflow-hidden bg-fixed bg-center bg-cover bg-white/80"
      style={{
        backgroundImage: `url(/assets/footerPics.jpg)`,
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="text-[#CC5500] bg-gradient-to-b from-white to-white/90 max-w-full footPad">
        {/* Footer Content */}
        <div className={`flex justify-between 2xl:gap-48 mx-auto px-20 py-20 ${!isDesktop && 'footer'} ${isTablet && 'px-2 -ml-20 gap-10'}`}>
          {/* Branding */}
          <div className={`2xl:mt-[-40px] lg:mt-[-25px] mr-40 ${isTablet && 'mr-2'}`}>
          <div className="flex justify-start pr-30"> 
            <Link href="/">
              <div className="flex flex-col items-center gap-0">
                <Image
                  src="/assets/logo.png"
                  width={1000}
                  height={50}
                  alt="logo"
                  className="object-cover bg-blend-multiply"
                />
                <h2 className={`mt-[-30px] px-2 ${!isDesktop && 'mt-[-30px] text-xl'}`}>Tony Sedi Trust</h2>
              </div>
            </Link>
          </div>
          </div>

          {/* Footer Links */}


          {/* Contact Us Section */}
          <div className="flex flex-col w-[70%] mr-20">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <div className="flex items-center">
              
           <img src=" https://img.icons8.com/?size=100&id=107436&format=png&color=000000" 
           width="32px"
           height="2px"
           className="object-contain"/>
           <a 
  href="https://www.google.com/maps/search/?api=1&query=Road+9,+Funbi+Fagun,+Ondo,+Ondo"
  target="_blank" 
  rel="noopener noreferrer"
  className="p-3 text-sm text-[#CC5500] hover:underline"
>
Road 9, Funbi Fagun Ondo, Ondo State
</a>
            </div>
            <div className="flex items-center">
              
              <img src="https://img.icons8.com/?size=100&id=12921&format=png&color=000000"
              width="32px"
              height="2px"
              className="object-contain"/>
            <a 
  href="tel:08033029830" 
 className="p-3 text-sm text-[#CC5500] hover:underline">
  08037621134
</a>

            </div>

            <div className="flex items-center">
              
           <img src=" https://img.icons8.com/?size=100&id=OumT4lIcOllS&format=png&color=000000" 
           width="32px"
           height="2px"
           className="object-contain"/>
           <a href="mailto:info@tonyseditrust.com" className="p-3 text-sm text-[#CC5500] hover:underline">
               info@tonyseditrust.com
           </a>

            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-3 mt-3 text-center">
          <p className="text-[#CC5500] text-xs">
            &copy; {new Date().getFullYear()} TONY SEDI TRUST NIG. LTD. All Rights Reserved.
          </p>
        </div>

      </div>
      <Meteors number={30} />

    </div>
  );
};

export default Footer;
