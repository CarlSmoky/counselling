"use client";
import { IoIosArrowUp } from "react-icons/io";
import { useScroll } from "../_hooks/useScroll";

const ScrollToTopButton: React.FC = () => {
  const isScrolled = useScroll();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${isScrolled ? "opacity-100" : "opacity-0"} fixed bottom-8 right-8 duration-300`}
    >
      <button
        onClick={handleScrollToTop}
        aria-hidden="true"
        tabIndex={-1} // Make sure the button is not focusable
        className="flex h-14 w-14 rounded-md bg-black-100/30"
      >
        <IoIosArrowUp className="m-auto text-2xl text-white-100" />
        <span className="sr-only">Scroll to top</span>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
