import React from "react";

type ParagraphProp = {
  subtitle?: string;
  isSubtitleBold?: boolean | false;
  paragraph: string | undefined;
};

const Paragraph: React.FC<ParagraphProp> = ({ subtitle, isSubtitleBold, paragraph }) => {
  return (
    <div className="my-8">
      {subtitle && 
        <h2 className={`${isSubtitleBold && "font-bold"} p-4`}>{subtitle}</h2>
      }
      <p className="whitespace-pre-line px-4 leading-loose">{paragraph}</p>
    </div>
  );
};

export default Paragraph;
