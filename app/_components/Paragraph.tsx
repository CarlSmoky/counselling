import React from "react";

type ParagraphProp = {
  paragraph: string | undefined;
};

const Paragraph: React.FC<ParagraphProp> = ({ paragraph }) => {
  return (
    <div className="my-8">
      <p className="whitespace-pre-line px-4 leading-loose">{paragraph}</p>
    </div>
  );
};

export default Paragraph;
