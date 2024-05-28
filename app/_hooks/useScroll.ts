import { useState, useEffect } from "react";

export const useScroll = () => {
  const [scroll, setsSroll] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 100) {
          setsSroll(true);
        } else {
          setsSroll(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);

    return scroll
}