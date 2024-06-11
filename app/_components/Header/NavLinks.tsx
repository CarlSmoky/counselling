"use client";
import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LinkInfo, Sublink } from "../../_types/types";
import { navList } from "../../_data/navList";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { toTitleCase } from "../../_util/textFormat";

type NavLinksProps = {
  onToggle: () => void;
  isNavOpen: boolean;
};

const NavLinks: React.FC<NavLinksProps> = ({ onToggle, isNavOpen }) => {
  const [heading, setHeading] = useState<string>("");
  const [navigateTo, setNavigateTo] = useState<string | null>(null);
  const router = useRouter();

  const clickHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string,
  ) => {
    e.preventDefault();
    onToggle();
    setHeading("");
    setNavigateTo(link);
  };

  useEffect(() => {
    if (navigateTo) {
      router.push(navigateTo);
      // Use setTimeout to ensure the navigation happens first
      setTimeout(() => {
        const contentHeader = document.getElementById("content-header");
        if (contentHeader) {
          contentHeader.setAttribute("tabindex", "-1");
          contentHeader.focus();
        }
      }, 200); // Small delay to ensure the navigation completes
      setNavigateTo(null);
    }
  }, [navigateTo, router]);

  return (
    <>
      {navList.map((link: LinkInfo, i) => (
        <Fragment key={i}>
          <li className="group text-left md:cursor-pointer">
            <Link
              onClick={(e) => clickHandler(e, link.link)}
              href={link.link}
              aria-label={toTitleCase(link.name)}
              tabIndex={isNavOpen ? 0 : -1} // Ensure link is not focusable when nav is closed
            >
              <div
                className={`flex px-8 py-7 align-baseline hover:text-grey-200 lg:px-2`}
              >
                {toTitleCase(link.name)}
                {link.submenu && (
                  <button
                    className="mx-4 inline px-2 text-2xl lg:hidden"
                    onClick={(e) => {
                      e.preventDefault();
                      heading !== link.name
                        ? setHeading(link.name)
                        : setHeading("");
                    }}
                    aria-expanded={heading === link.name}
                    aria-controls={`submenu-${i}`}
                    aria-label={`Toggle submenu for ${toTitleCase(link.name)}`}
                    tabIndex={isNavOpen ? 0 : -1} // Ensure link is not focusable when nav is closed
                  >
                    {heading === link.name ? (
                      <RiArrowUpSLine />
                    ) : (
                      <RiArrowDownSLine />
                    )}
                  </button>
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
                  <ul
                    id={`submenu-${i}`}
                    className="grid grid-cols-3 rounded-sm bg-prime-100 px-5"
                  >
                    {link.sublinks?.map((slink: Sublink, j) => (
                      <li
                        key={j}
                        className="my-2.5 text-sm transition-all duration-300 ease-in-out hover:text-grey-200"
                      >
                        <Link
                          href={slink.link}
                          aria-label={slink.name} 
                          tabIndex={isNavOpen ? 0 : -1} // Ensure link is not focusable when nav is closed
                        >
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
          {/* Mobile menus */}
          <ul className={`${heading === link.name ? "lg:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks?.map((slink: Sublink, j) => (
              <li
                key={j}
                className="py-3 pl-14 text-sm transition-all duration-300 ease-in-out hover:text-black-100"
              >
                <Link
                  onClick={(e) => clickHandler(e, slink.link)}
                  href={slink.link}
                  aria-label={slink.name}
                >
                  {slink.name}
                </Link>
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </>
  );
};

export default NavLinks;
