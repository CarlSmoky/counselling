"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../../public/logo.png"
import ContactInfoBar from "./ContactInfoBar"

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <nav className="margin-global  whitespace-nowrap text-prime-100 text-base xl:text-lg font-paragraph bg-white-100">
      <ContactInfoBar />
      <div className="flex justify-between px-4 h-[80px] md:h-[120px] ">
        <div className="z-50 py-3 w-full flex justify-between">
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
              className="flex  my-auto sm:cursor-pointer w-[200px] md:w-[340px]"
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
        lg:hidden bg-white-100 fixed w-full top-0 overflow-y-auto bottom-0 py-24
        duration-500 ${open ? "left-0 z-30" : "left-[-100%] z-10"}
        `}
        >
          <NavLinks onToggle={handleToggle} />
          <ul className="flex justify-center">
            
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
