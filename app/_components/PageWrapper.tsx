import React from "react";
import ContentWithHeader from "./ContentWithHeader";
import Paragraph from "../_components/Paragraph";
import HtmlContent from "../_components/HtmlContent"
import List from "../_components/List";
import Quote from "../_components/Quote";
import PortraitImage from "../_components/PortraitImage";
import type { ContentType } from "../_types/types";

type PageWrapperProps = {
  header: string;
  pageContents: ContentType[];
}

const PageWrapper: React.FC<PageWrapperProps> = ({ header, pageContents }) => {
  return (
    <>
      <ContentWithHeader header={header}>
        <section className="font-paragraph">
          {pageContents.map((el: ContentType, i: number) => {
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
            if (el.component === "htmlContent") {
              return (
                <React.Fragment key={i}>
                  <HtmlContent subtitle={el.subtitle} isSubtitleBold={el.isSubtitleBold} htmlString={el.htmlString} />
                </React.Fragment>
              );
            }
            if (el.component === "list" && el.hasSideComponent) {
              return (
                <div key={i} className="flex flex-col-reverse md:flex-row">
                  <List
                    title={el.title}
                    items={el.items}
                    isItemsBold={el.isItemsBold}
                    isTitleBold={el.isTitleBold}
                    isBulletPoint={el.isBulletPoint}
                  />
                  <PortraitImage
                    src="/BoYihj_portlait.jpg"
                    alt="BoYihj_portlait"
                  />
                </div>
              );
            }
            if (el.component === "list" && !el.hasSideComponent) {
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
      </ContentWithHeader>
    </>
  );
};

export default PageWrapper;
