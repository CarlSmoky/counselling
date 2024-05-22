"use client"

import React from 'react'
import DOMPurify from 'dompurify'
// import * as DOMPurify from 'dompurify';


type ParagraphProp = {
  subtitle?: string;
  isSubtitleBold?: boolean | false;
  htmlString?: string | undefined;
};

const HtmlContent:React.FC<ParagraphProp> = ({ subtitle, isSubtitleBold, htmlString }) => {
  // Sanitize the HTML string before rendering to prevent XSS attacks
  const sanitizedHtmlString = DOMPurify.sanitize(htmlString || "");

  return (
    <div className="my-8">
    {subtitle && 
      <h2 className={`${isSubtitleBold && "font-bold"} p-4`}>{subtitle}</h2>
    }
    <div className="whitespace-pre-line px-4 leading-loose" dangerouslySetInnerHTML={{ __html: sanitizedHtmlString }} />
  </div>
  )
}

export default HtmlContent