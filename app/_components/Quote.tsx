import React from "react";

type QuoteProps = {
  quote: string | undefined;
  author: string | undefined;
};

const Quote: React.FC<QuoteProps> = ({ quote, author }) => {
  return (
    <div className="m-4 whitespace-pre-line bg-grey-300 italic leading-loose">
      <blockquote className="p-5 px-4 leading-loose">
        <p>
          {quote}
          <span className="pt-4 font-bold">{author}</span>
        </p>
      </blockquote>
    </div>
  );
};

export default Quote;
