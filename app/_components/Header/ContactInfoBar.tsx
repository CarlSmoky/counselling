import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const ContactInfoBar = () => {
  return (
    <div className="h-9 px-4 bg-prime-100 text-white-100">
      <div className="flex h-full">
        <div className="flex flex-row my-auto font-paragraph">
          <Link href="tel:416-879-8854">
            <span className="flex"><FaPhone size={18} className="m-auto"/>&nbsp;&nbsp;416-879-8854</span>
          </Link>
          <Link href="mailto:boyih@hotmail.com?subject=Mail from web site">
            <span className="flex ml-6"><MdEmail size={20} className="m-auto"/>&nbsp;&nbsp;boyih@hotmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoBar;
