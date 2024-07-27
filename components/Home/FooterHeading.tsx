import React from "react";

const FooterHeading: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 text-center justify-center p-16 sm:p-24 bg-gray-100 m-10">
      <h2 className="text-4xl font-inter font-semibold">Heading</h2>
      <p className="text-lg font-inter text-gray-500">
        Plus a subheading for your site’s footer
      </p>
      <div>
        <button className="bg-black text-white p-2 px-5 text-xs rounded-lg hover:bg-white hover:text-black border-2 border-black font-inter font-semibold">
          Button
        </button>
      </div>
    </div>
  );
};

export default FooterHeading;
