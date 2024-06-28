import React from "react";
import Image from "next/image";
import modhaProject from "../../public/assets/modha-project.png";

const ModhaMain: React.FC = () => {
  return (
    <div className="relative h-[90vh] w-full">
      <Image
        src={modhaProject}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="absolute inset-0 flex items-center z-10 bg-black text-white bg-opacity-5">
        <div className="px-12 lg:px-28 lg:w-2/3 flex flex-col gap-5">
          <div className="flex flex-col gap-1 sm:gap-5 leading-loose">
            <h2 className="text-5xl sm:text-6xl font-semibold font-poppins" style={{ lineHeight: '1.4' }}>
              Modha (Smart Bedside table)
            </h2>
          </div>
          <p className="font-inter sm:text-lg">
            Redefining Smart Functionality and Customization for Modern
            Lifestyles
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModhaMain;
