import React from "react";

const SectionTitle = ({ heading, headingTitle }) => {
  return (
    <div className="text-center w-[80%] sm:w-1/2 md:w-1/3 mx-auto">
      <p className="text-yellow-600 italic pb-2">---{heading}---</p>
      <p className="text-4xl border-y-4 py-4">{headingTitle}</p>
    </div>
  );
};

export default SectionTitle;
