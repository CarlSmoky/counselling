import Link from "next/link";

const Contact = () => {
  return (
    <section className="my-8 px-4 font-paragraph leading-loose">
      <p className="font-bold">Contact me for a free consultation:</p>
      <ul className="flex flex-col md:w-1/3 ">
        <li className="p-2">
          <Link href="tel:416-879-8854">
            <span className="font-bold hover:text-grey-200">Phone: </span>
            <span className="transition-all duration-300 ease-in-out hover:text-grey-200">
              416-879-8854
            </span>
          </Link>
        </li>
        <li className="p-2">
          <Link href="mailto:boyih@hotmail.com?subject=Mail from web site">
            <span className="font-bold">Email: </span>
            <span className="transition-all duration-300 ease-in-out hover:text-grey-200">
              boyih@hotmail.com
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
