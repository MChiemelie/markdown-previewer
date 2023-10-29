import React from "react";
import { marked } from 'marked';

const Preview = ({ markdown }) => {
   const getMarkdownText = () => {
      return { __html: marked(markdown, { breaks: true }) };
   };

   return (
      <div
         id="preview"
         className="w-full bg-green-100 p-4 rounded font-medium"
         dangerouslySetInnerHTML={getMarkdownText()}
      />
   );
};

export default Preview;