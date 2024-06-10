import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="flex h-[95px] bg-prime-100">
      <small className="px-4 flex text-white-100 m-auto text-sm md:text-lg whitespace-nowrap font-paragraph">© {currentYear} Integrative Counselling Resources</small>
    </footer>
  );
};

export default Footer;
