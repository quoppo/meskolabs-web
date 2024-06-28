import React from "react";
import Image from "next/image";
import bkpk1 from "../../public/assets/bkpk/bkpk1.png";

const BkpkMain: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-7 px-20 items-center">
      <div className="flex flex-col gap-7 px-7 text-center sm:text-left">
        <h2 className="font-semibold text-6xl sm:text-7xl font-poppins">BKPK</h2>
        <p className="text-lg text-gray-400 font-inter">
          Redefining Smart Functionality and Customization for Modern Lifestyles
        </p>
      </div>
      <div>
        <Image src={bkpk1} alt="project-img" />
      </div>
    </div>
  );
};

export default BkpkMain;
