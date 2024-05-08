import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="margin-global flex h-[95px] bg-prime-100">
      <p className="px-4 flex text-white-100 m-auto text-sm lg:text-xs whitespace-nowrap">© {currentYear} Integrative Counselling Resources.</p>
    </div>
  );
};

export default Footer;
