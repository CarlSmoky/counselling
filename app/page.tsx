import React from "react";
import PageWrapper from "./_components/PageWrapper";
import { contents } from "./_data/text";
import type { PageInfo } from "./_types/types";

const page = "home";
const header = "Bo Yih Thom, MSW, RSW";

const homePage = () => {
  const pageData: PageInfo[] = contents[page] as PageInfo[];

  return (
    <>
      <PageWrapper header={header} pageContents={pageData} />
    </>
  );
};

export default homePage;
