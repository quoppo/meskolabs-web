import React from "react";
import Image from "next/image";
import dlvr2 from "../../public/assets/Dlvr/dlvr2.png";
import dlvr3 from "../../public/assets/Dlvr/dlvr3.png";
import dlvr4 from "../../public/assets/Dlvr/dlvr4.png";
import dlvr5 from "../../public/assets/Dlvr/dlvr5.png";
import dlvrProject6 from "../../public/assets/Dlvr/dlvrProject6.jpeg";
import dlvrProject7 from "../../public/assets/Dlvr/dlvrProject7.jpeg";
import dlvrProject8 from "../../public/assets/Dlvr/dlvrProject8.jpeg";

const DlvrIdeation: React.FC = () => {
  return (
    <>
      <div className="w-full py-10">
        <p className="text-xl font-bold font-inter text-gray-400 px-20 py-5">
          Ideation 1
        </p>
        <div className="grid grid-cols-1 gap-5">
          <Image src={dlvr2} alt="project-image" />
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center items-center">
            <Image src={dlvr3} alt="project-image" />
            <Image src={dlvr4} alt="project-image" />
          </div>
          <Image src={dlvr5} alt="project-image" />
        </div>
      </div>
      <div className="w-full">
        <p className="text-xl font-bold text-gray-400 px-20 py-5 font-inter">
          Ideation 2
        </p>
        <div className="grid grid-cols-1 gap-5 justify-center">
          <Image src={dlvrProject6} alt="project-image" />
        </div>
      </div>
      <div className="w-full">
        <p className="text-xl font-bold font-inter text-gray-400 px-20 py-5">
          Ideation 3
        </p>
        <div className="grid grid-cols-1 gap-5 justify-center">
          <Image src={dlvrProject7} alt="project-image" />
        </div>
      </div>
      <div className="w-full">
        <p className="text-xl font-bold font-inter text-gray-400 px-20 py-5">
          Ideation 4
        </p>
        <div className="grid grid-cols-1 gap-5 justify-center">
          <Image src={dlvrProject8} alt="project-image" />
        </div>
      </div>
    </>
  );
};

export default DlvrIdeation;
