import React, { PropsWithChildren } from 'react'
import Paragraph from "../_components/Paragraph";
import List from "../_components/List";
import Quote from './Quote';
import type { PageInfo } from "../_types/types";
import { toTitleCase } from "../_util/textFormat";

interface Props extends PropsWithChildren {
  header: string;
  contents: PageInfo[];
}

const PageWrapper: React.FC<Props> = ({header, contents}) => {
  return (
    <section className="margin-global page-min-h">
      <div className="flex w-full h-[50px] mb-12 bg-grey-100 text-prime-100 font-bold text-xl" >
        <h2 className="mx-auto p-2">{toTitleCase(header)}</h2>
      </div>
      {contents.map((el: PageInfo, i:number) => {
        if (el.component === "paragraph") {
          return (
            <React.Fragment key={i}>
              <Paragraph subtitle={el.subtitle} isSubtitleBold={el.isSubtitleBold} paragraph={el.paragraph} />
            </React.Fragment>
          );
        }
        if (el.component === "list") {
          return (
            <React.Fragment key={i}>
              <List title={el.title} items={el.items} isItemsBold={el.isItemsBold} isTitleBold={el.isTitleBold} isBulletPoint={el.isBulletPoint}/>
            </React.Fragment>
          );
        }
        if (el.component === "quote") {
          return (
            <React.Fragment key={i}>
              <Quote quote={el.quote} author={el.author}/>
            </React.Fragment>
          );
        }
      })}
    </section>
  )
}

export default PageWrapper