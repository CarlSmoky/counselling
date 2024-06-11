"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../../public/logo.png";
import NavLinks from "./NavLinks";
import { useScroll } from "../../_hooks/useScroll";

type NavbarProps = {
  isNavOpen: boolean;
  onToggleNav: (isOpen: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ isNavOpen, onToggleNav }) => {
  const isScrolled = useScroll();
  const mobileNavRef = useRef<HTMLUListElement>(null);

  const handleToggle = () => {
    onToggleNav(!isNavOpen);
  };

  const closeNav = () => {
    onToggleNav(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isNavOpen) {
        closeNav();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isNavOpen]);

  return (
    <nav className="sticky top-0 whitespace-nowrap text-prime-100 text-base xl:text-lg font-paragraph z-10 bg-white-100">
      <div className="flex justify-between px-4">
        <div className={`w-full z-50 py-3 flex justify-between `}>
          <Link href="/" onClick={closeNav} className="flex" aria-label="Home">
            <Image
              src={Logo}
              alt="Interactive Counseling Resource"
              className={`flex my-auto sm:cursor-pointer transition-all duration-300 ease-in-out ${isScrolled ? "w-[182px] md:w-[255px]" : "w-[243px] md:w/[340px]"}`}
              sizes="33vw"
              priority
            />
          </Link>
          <button
            className="cursor-pointer text-3xl lg:hidden text-black-100 my-auto"
            onClick={handleToggle}
            aria-expanded={isNavOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <ul className="hidden lg:flex items-center text-sm xl:text-base">
          <NavLinks onToggle={closeNav} isNavOpen={isNavOpen}/>
        </ul>
        {/* Mobile nav */}
        <ul
          id="mobile-menu"
          ref={mobileNavRef}
          aria-hidden={!isNavOpen}
          className={`lg:hidden bg-grey-300 fixed w-full top-0 overflow-y-auto bottom-0 pt-28 md:pt-36 text-base md:text-xl duration-300 ${isNavOpen ? "left-0 z-30" : "left-[-100%] z-10"}`}
        >
          <NavLinks onToggle={closeNav} isNavOpen={isNavOpen}/>
        </ul>
      </div>
      <div className="h-1 shadow-bottom-only"></div>
    </nav>
  );
};

export default Navbar;
