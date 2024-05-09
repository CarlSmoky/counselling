import React from "react";
import PageWrapper from "./_components/PageWrapper";
// import PortraitImage from "./_components/PortraitImage"
import { contents } from "./_data/text";

const page = "home";
const header = "Bo Yih Thom, MSW, RSW";

const HomePage: React.FC = () => {
  return (
    <>
      <PageWrapper header={header} contents={contents[page]}/>
    </>
  );
};

export default HomePage;
