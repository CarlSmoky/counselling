import React, { PropsWithChildren } from "react";
import { toTitleCase } from "../_util/textFormat";

interface PageWrapperProps extends PropsWithChildren {
  header: string;
}

const ContentWithHeader: React.FC<PageWrapperProps> = ({
  header,
  children,
}) => {
  return (
    <div className="page-min-h">
      <div className="mb-12 flex h-[45px] w-full bg-grey-100 md:h-[55px] ">
        <h1 id="content-header" tabIndex={-1} className="m-auto p-2 font-title text-xl font-bold text-prime-100 md:text-2xl">
          {toTitleCase(header)}
        </h1>
      </div>
      {children}
    </div>
  );
};

export default ContentWithHeader;
