"use client";
import React, { useState, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkInfo, Sublink } from "../../_types/types";
import { navList } from "../../_data/navList";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { toTitleCase } from "../../_util/textFormat";

const NavLinks: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  const [heading, setHeading] = useState<string>("");
  const pathname = usePathname();

  const clickHandler = () => {
    onToggle();
    setHeading("");
  };

  return (
    <>
      {navList.map((link: LinkInfo, i) => (
        <Fragment key={i}>
          <li className="group text-left md:cursor-pointer">
            <Link onClick={clickHandler} href={link.link} prefetch={false}>
              <div
                className={`flex px-8 py-7 md:py-4 align-baseline hover:text-grey-200 lg:px-2`}
              >
                {toTitleCase(link.name)}
                {link.submenu && (
                  <span
                    className="mx-4 inline px-2 text-2xl lg:hidden"
                    onClick={() => {
                      heading !== link.name
                        ? setHeading(link.name)
                        : setHeading("");
                    }}
                  >
                    {heading === link.name ? (
                      <RiArrowUpSLine />
                    ) : (
                      <RiArrowDownSLine />
                    )}
                  </span>
                )}
                {link.submenu && (
                  <div className="duration-600 hidden text-lg transition-all ease-in-out group-hover:rotate-180 group-hover:text-grey-200 lg:my-auto lg:flex lg:justify-center lg:px-1">
                    <RiArrowDownSLine />
                  </div>
                )}
              </div>
            </Link>
            {link.submenu && (
              <div>
                <div className="absolute top-20 z-10 hidden hover:lg:block group-hover:lg:block">
                  <ul className="grid grid-cols-3 rounded-sm bg-prime-100 px-5 ">
                    {link.sublinks?.map((slink: Sublink, i) => (
                      <Link key={i} href={slink.link} prefetch={false}>
                        <li className="my-2.5 text-sm transition-all duration-300 ease-in-out hover:text-grey-200">
                          {slink.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "lg:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks?.map((slinks: Sublink, i) => (
              <Link
                key={i}
                onClick={clickHandler}
                href={slinks.link}
                prefetch={false}
              >
                <li className="py-3 pl-14 text-sm transition-all duration-300 ease-in-out hover:text-black-100">
                  {slinks.name}
                </li>
              </Link>
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default NavLinks;
