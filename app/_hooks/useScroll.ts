import { useState, useEffect } from "react";

export const useScroll = () => {
  const [scroll, setSroll] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 100) {
          setSroll(true);
        } else {
          setSroll(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);

    return scroll
}