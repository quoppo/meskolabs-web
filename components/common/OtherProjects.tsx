import React from "react";

const OtherProjects: React.FC = () => {
  return (
    <div className="p-10 pb-28">
      <p className="text-2xl py-5 font-semibold font-inter text-center lg:text-left">Other projects</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="p-32 sm:p-36 bg-gray-300"></div>
        <div className="p-32 sm:p-36 bg-gray-300"></div>
        <div className="p-32 sm:p-36 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default OtherProjects;
