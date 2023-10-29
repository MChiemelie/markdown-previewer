import React from "react";

const Editor = ({ markdown, handleChange }) => {
   return (
      <textarea
         id="editor"
         className="w-full bg-oraange-100 p-4 rounded text-xl font-medium"
         value={markdown}
         onChange={handleChange}
      />
   );
};

export default Editor;
