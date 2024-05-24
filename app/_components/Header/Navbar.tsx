"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../../public/logo.png"
import NavLinks from "./NavLinks";



const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 whitespace-nowrap text-prime-100 text-base xl:text-lg font-paragraph z-10 bg-white-100">
      <div className="flex justify-between px-4">
        <div className={`w-full z-50 py-3 flex justify-between `}>
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
              className={`flex my-auto sm:cursor-pointer transition-all duration-300 ease-in-out ${shrink ? "w-[182px] md:w-[255px]" : "w-[243px] md:w-[340px]"}`}
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
        <ul className="hidden lg:flex items-center text-sm xl:text-base">
          <NavLinks onToggle={handleToggle} />
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        lg:hidden bg-grey-300 fixed w-full top-0 overflow-y-auto bottom-0 pt-28 md:pt-36 text-base md:text-xl
        duration-300 ${open ? "left-0 z-30" : "left-[-100%] z-10"}
        `}
        >
          <NavLinks onToggle={handleToggle} />
        </ul>
      </div>
      <div className="h-1 shadow-bottom-only"></div>
    </nav>
  );
};

export default Navbar;
