"use client";
import React, { useRef, useEffect, useState } from "react";
import Navbar from "../_components/Header/Navbar";
import Paragraph from "../_components/Paragraph";
import List from "../_components/List";
import Quote from "./Quote";
import type { PageInfo } from "../_types/types";
import { toTitleCase } from "../_util/textFormat";

interface PageWrapperProps {
  header: string;
  contents: PageInfo[];
}

interface ElementPosition {
  top: number;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ header, contents }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<ElementPosition>({ top: 0});

  const handleScroll = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call to set position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar top={position.top}/>
      <section ref={elementRef} className="page-min-h">
        <div className="mb-12 flex h-[50px] w-full bg-grey-100 text-xl font-bold text-prime-100">
          <h2 className="mx-auto p-2">{toTitleCase(header)}</h2>
        </div>
        {contents.map((el: PageInfo, i: number) => {
          if (el.component === "paragraph") {
            return (
              <React.Fragment key={i}>
                <Paragraph
                  subtitle={el.subtitle}
                  isSubtitleBold={el.isSubtitleBold}
                  paragraph={el.paragraph}
                />
              </React.Fragment>
            );
          }
          if (el.component === "list") {
            return (
              <React.Fragment key={i}>
                <List
                  title={el.title}
                  items={el.items}
                  isItemsBold={el.isItemsBold}
                  isTitleBold={el.isTitleBold}
                  isBulletPoint={el.isBulletPoint}
                />
              </React.Fragment>
            );
          }
          if (el.component === "quote") {
            return (
              <React.Fragment key={i}>
                <Quote quote={el.quote} author={el.author} />
              </React.Fragment>
            );
          }
        })}
      </section>
    </>
  );
};

export default PageWrapper;
