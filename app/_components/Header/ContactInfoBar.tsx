import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const ContactInfoBar = () => {
  return (
    <div className="h-9 px-4 bg-prime-100 text-white-100">
      <div className="flex h-full">
        <ul className="flex flex-row my-auto">
          <li className="flex"><FaPhone size={18}/> 416-879-8854</li>
          <li className="flex ml-6"><MdEmail size={20}/>boyih@hotmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfoBar;