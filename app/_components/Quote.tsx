import React from "react";

type QuoteProps = {
  quote: string | undefined;
  author: string | undefined;
};

const Quote: React.FC<QuoteProps> = ({ quote, author }) => {
  return (
    <div className="whitespace-pre-line italic leading-loose m-4 bg-grey-300">
      <blockquote className="px-4 pb-5">
        {quote}
        <span className="font-bold">{author}</span>
      </blockquote>
    </div>
  );
};

export default Quote;
