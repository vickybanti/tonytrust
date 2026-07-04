"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/use-media-query";
import { NAVLINKS } from "../constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "./ui/dropdown-menu";

const MobileNav = () => {
  const isDesktop = useMediaQuery("(min-width: 414px)");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);  return (
    <header className={`fixed top-0 z-50 w-full bg-background shadow-sm dark:bg-white transition-all duration-300 ${
        scrolled
            ? "bg-white shadow-md py-4"
            : "bg-transparent py-6"
    }`}>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="flex items-center justify-between px-4 py-4 mx-auto"
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            width={100}
            height={50}
            alt="Prolinks Logo"
            className="object-contain"
          />
        </Link>

        {/* Mobile Navigation Menu */}
        <nav>
          <DropdownMenu open={isMenuOpen} onOpenChange={setMenuOpen}>
            {/* Menu Button */}
            <DropdownMenuTrigger asChild>
              <button onClick={toggleMenu} className="cursor-pointer">
                <Image
                  src={
                    isMenuOpen
                      ? "https://img.icons8.com/?size=100&id=OnvcRudMyrz9&format=png&color=cc5500" // Close icon
                      : "https://img.icons8.com/?size=100&id=120374&format=png&color=cc5500" // Menu icon
                  }
                  alt={isMenuOpen ? "Close Menu" : "Open Menu"}
                  width={32}
                  height={32}
                className={isMenuOpen ? "transform rotate-180 duration-300" : "transition-all linear duration-300"}
                />
              </button>
            </DropdownMenuTrigger>

            {/* Dropdown Content */}
            {isMenuOpen && (
              <DropdownMenuContent className={`w-[430px] bg-white border-none ${!isDesktop && "w-[354px]"}`}>
                <DropdownMenuLabel />

                <DropdownMenuSeparator />

                {/* Navigation Links */}
                <DropdownMenuGroup className="space-y-2">
                  {NAVLINKS.map((link) => {
                    // const isActive = link.route === pathname;

                    return (
                      <div key={link.id}>
                        {/* Parent Link */}


                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="p-4 text-[#CC5500]">
                              {link.label}
                            </DropdownMenuSubTrigger>
                          </DropdownMenuSub>
                      </div>
                    )
                  })}

                </DropdownMenuGroup>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        </nav>
      </motion.div>
    </header>
  );
};

export default MobileNav;
