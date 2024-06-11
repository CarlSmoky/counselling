"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const NavbarWrapper: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = (isOpen: boolean) => {
    setIsNavOpen(isOpen);
  };

  useEffect(() => {
    const elements = [
      document.getElementById("contactInfo"),
      document.getElementById("main-content"),
      document.getElementById("footer"),
      document.getElementById("contact"),
      document.getElementById("scrollToTopButton"),
    ];

    elements.forEach((element) => {
      if (element) {
        if (isNavOpen) {
          element.setAttribute("aria-hidden", "true");
          element.setAttribute("tabindex", "-1");
        } else {
          element.removeAttribute("aria-hidden");
          element.removeAttribute("tabindex");
        }
      }
    });
  }, [isNavOpen]);

  return <Navbar isNavOpen={isNavOpen} onToggleNav={toggleNav} />;
};

export default NavbarWrapper;
