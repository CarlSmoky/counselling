import React from "react";
import type { Metadata } from "next";
import PageWrapper from "./_components/PageWrapper";
import { contents } from "./_data/text";
import type { ContentType } from "./_types/types";

const page = "home";
const header = "Bo Yih Thom, MSW, RSW";

const homePage = () => {
  const pageData: ContentType[] = contents[page] as ContentType[];

  return (
    <>
      <PageWrapper header={header} pageContents={pageData} />
    </>
  );
};

export default homePage;
