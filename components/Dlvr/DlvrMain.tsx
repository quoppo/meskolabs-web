import React from "react";
import Image from "next/image";
import dlvrEase from "../../public/assets/dlvrEase.jpeg";

const DlvrMain: React.FC = () => {
  return (
    <div className="relative h-[90vh] w-full">
      <Image
        src={dlvrEase}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0 filter grayscale"
        priority={true}
      />
      <div className="absolute inset-0 flex items-center justify-end pr-14 sm:pr-32 z-10">
        <div className="flex flex-col text-center">
          <div className="bg-white p-5 mb-2 inline-block font-montserrat">
            <h1 className="text-7xl sm:text-8xl text-black font-extrabold">DL</h1>
            <h1 className="text-7xl sm:text-8xl text-black font-extrabold">VR</h1>
          </div>
          <div className="text-center">
            <p className="text-white font-extrabold text-6xl font-montserrat">EASE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DlvrMain;
