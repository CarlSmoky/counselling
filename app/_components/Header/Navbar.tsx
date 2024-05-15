"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../../public/logo.png"

interface NavbarProp {
  top: number;
}

const Navbar: React.FC<NavbarProp> = ({ top }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [shrink, setShrink] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (top > 20) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [top]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 whitespace-nowrap text-prime-100 text-base xl:text-lg font-paragraph bg-white-100 z-10">
      <div className="flex justify-between px-4 ">
        <div className={`w-full z-50 py-3 flex justify-between bg-white-100`}>
          <Link
            href="/"
            onClick={() => {
              closeNav();
            }}
            className="flex"
          >
            <Image
              src={Logo}
              alt="Interactive Counseling Resource Logo"
              className={`flex my-auto sm:cursor-pointer transition-all duration-300 ease-in-out ${shrink ? "w-[243px] md:w-[340px]" : "w-[182px] md:w-[255px]"}`}
              sizes="33vw"
              priority
            />
          </Link>
          <div
            className="cursor-pointer text-3xl lg:hidden text-black-100 my-auto"
            onClick={handleToggle}
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
        <ul className="hidden lg:flex items-center">
          <NavLinks onToggle={handleToggle} />
          
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        lg:hidden bg-white-100 fixed w-full top-0 overflow-y-auto bottom-0 pt-28 md:pt-36
        duration-500 ${open ? "left-0 z-30" : "left-[-100%] z-10"}
        `}
        >
          <NavLinks onToggle={handleToggle} />
          <ul className="flex justify-center">
            
          </ul>
        </ul>
      </div>
      <div className="h-1 shadow-bottom-only"></div>
    </nav>
  );
};

export default Navbar;
