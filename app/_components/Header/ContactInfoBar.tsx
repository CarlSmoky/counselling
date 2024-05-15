import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const ContactInfoBar = () => {
  return (
    <div className="h-9 px-4 bg-prime-100 text-white-100">
      <div className="flex h-full">
        <ul className="flex flex-row my-auto">
          <Link href="tel:416-879-8854">
            <li className="flex"><FaPhone size={18}/>&nbsp;&nbsp;416-879-8854</li>
          </Link>
          <Link href="mailto:boyih@hotmail.com?subject=Mail from web site">
            <li className="flex ml-6"><MdEmail size={20}/>&nbsp;&nbsp;boyih@hotmail.com</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfoBar;
