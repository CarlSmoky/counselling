"use client";
import React, { useRef, useEffect, useState, PropsWithChildren } from "react";
import Navbar from "./Header/Navbar";
import { toTitleCase } from "../_util/textFormat";

interface PageWrapperProps extends PropsWithChildren {
  header: string;
}

interface ElementPosition {
  top: number;
}

const ContentWithHeader:React.FC<PageWrapperProps> = ({ header, children }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<ElementPosition>({ top: 0});

  const handleScroll = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call to set position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar top={position.top}/>
      <div ref={elementRef} className="page-min-h">
        <div className="mb-12 flex h-[50px] w-full bg-grey-100 text-xl font-bold text-prime-100">
          <h2 className="mx-auto p-2">{toTitleCase(header)}</h2>
        </div>
        {children}
      </ div>
    </>
  )
}

export default ContentWithHeader