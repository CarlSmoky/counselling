"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton:React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} fixed bottom-8 right-8 duration-300`}>
      <button onClick={handleScrollToTop} aria-label="Scroll to top" className="flex w-14 h-14 bg-black-100/30 rounded-md">
        <IoIosArrowUp className="text-white-100 m-auto text-2xl"/>
        <span className="sr-only">Scroll to top</span>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
