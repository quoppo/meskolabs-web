import React from "react";

const Main: React.FC = () => {
  return (
    <div className="flex items-center sm:h-screen px-5 sm:px-12">
      <div className="px-10 sm:px-16 flex flex-col gap-5 lg:w-4/6">
        <h2 className="text-4xl sm:text-6xl text-gray-700 font-medium leading-relaxed font-poppins"  style={{ lineHeight: '1.4' }}>
          Empowering Your Designs with Meskolabs Expertise
        </h2>
        <p className="text-gray-500 text-lg font-inter">
          And a subheading describing your site, too
        </p>
        <div>
          <button className="bg-black text-white p-2 px-5 text-xs rounded-lg hover:bg-white hover:text-black border-2 border-black mt-1 font-inter font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
