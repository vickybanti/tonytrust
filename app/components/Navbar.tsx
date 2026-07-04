"use client";
import React,{useEffect, useState} from "react";
import Link from "next/link";
import { useMediaQuery } from "../hooks/use-media-query";
import MobileNav from "./MobileNav";
import { NAVLINKS } from "../constants";
import { usePathname } from "next/navigation";
import {motion} from 'framer-motion'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"



export function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 780px)");

        return isDesktop ? (
    <div className="relative w-full">
      <DesktopNavbar />
    </div>
  ) : (
    <MobileNav />
  );
}




function DesktopNavbar() {
  const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



  return (
    <div className={`fixed top-0 z-50 w-full bg-background shadow-sm transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}>
      <motion.div 
       initial={{ x: -30, opacity: 0.2 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ ease: "easeInOut", duration: 1.5 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: false }}
      className="flex items-center justify-between w-full px-14 top-0 bg-transparent">
        {/* Logo */}
        <div className="top-0 left-0 ml-5 flex items-center w-full">
        <Link href="/">
                <h3 className={"flex text-4xl"}>
                    <span className={"font-bold text-[#CC5500]"}>T</span>
                    <span className={"font-bold text-blue-900"}>S</span>
                    <span className={"font-bold text-blue-900"}>T</span>
                </h3>

       </Link>
        </div>

{/* Navigation Links */}
<div className="flex left-0 space-x-1 text-[#CC5500] ml-auto mr-3">
  {NAVLINKS.map((link) => {
    const isActive = link.route === pathname;
    return (
      <NavigationMenu key={link.id}>
        <NavigationMenuList className="relative z-10">
          <NavigationMenuItem
            className={`relative px-3 py-3 overflow-hidden transition-all duration-700 ${
                isActive
                    ? "inset-0 bg-gradient-to-b from-[#CC5500] to-white text-black"
                    : `transition-all duration-300 ${
                        scrolled
                            ? "bg-white shadow-md py-4 text-[#CC5500] group"
                            : "bg-transparent py-6 text-white font-semibold"
                    }`
            }`}

          >
            {/* Background Gradient Overlay */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#CC5500] to-white scale-y-0 origin-top transition-transform duration-700 group-hover:scale-y-100"></span>

            {/* If there are product items, show dropdown, else just a link */}

              <NavigationMenuLink href={link.route} className="relative z-10">
                {link.label}
              </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  })}
</div>


        {/* Login Button */}
        <div className="flex-shrink-0">
          
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
