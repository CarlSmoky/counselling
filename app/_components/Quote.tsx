import React from "react";

type QuoteProps = {
  quote: string | undefined;
  author: string | undefined;
};

const Quote: React.FC<QuoteProps> = ({ quote, author }) => {
  return (
    <div className="whitespace-pre-line italic leading-loose m-4 bg-grey-300">
      <blockquote className="px-4 p-5 leading-loose">
        &quot;{quote}&quot;
        <br/>
        <p className="font-bold pt-4">{author}</p>
      </blockquote>
    </div>
  );
};

export default Quote;
