import React from "react";
import Image from "next/image";
import bkpk2 from "../../public/assets/bkpk/bkpk2.png";
import bkpk3 from "../../public/assets/bkpk/bkpk3.png";
import bkpk4 from "../../public/assets/bkpk/bkpk4.png";
import bkpk5 from "../../public/assets/bkpk/bkpk5.png";
import bkpk6 from "../../public/assets/bkpk/bkpk6.png";
import bkpk7 from "../../public/assets/bkpk/bkpk-7.png";
import bkpk8 from "../../public/assets/bkpk/bkpk8.png";

const BkpkSolution: React.FC = () => {
  return (
    <>
      <div className="text-center justify-center p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-3xl sm:text-4xl font-poppins">
            1. Shoulder strap innovative solution.
          </h4>
          <div className="flex justify-center">
            <Image src={bkpk2} alt="solution-image" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-3xl sm:text-4xl font-poppins">
            2. Shoulder strap innovative solution.
          </h4>
          <div className="flex justify-center">
            <Image src={bkpk3} alt="solution-image" />
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={bkpk4} alt="solution-image" />
        </div>
        <div className="flex justify-center">
          <Image src={bkpk5} alt="solution-image" />
        </div>
        <div className="flex justify-center">
          <Image src={bkpk6} alt="solution-image" />
        </div>
      </div>
      <div className="p-5 sm:py-10">
        <h4 className="text-gray-400 text-3xl font-semibold p-5 sm:p-20 font-inter text-center lg:text-left">
          Final ideations
        </h4>
        <div className="sm:px-20 flex justify-center">
          <Image src={bkpk7} alt="ideation-image" />
        </div>
      </div>
      <div className="p-5 sm:py-10">
        <h4 className="text-gray-400 text-3xl font-semibold p-5 sm:px-20 font-inter text-center lg:text-left">
          The Solution
        </h4>
        <div className="sm:px-20 flex justify-center">
          <Image src={bkpk8} alt="solution-image" />
        </div>
      </div>
      <div className="p-10 sm:px-24 lg:w-4/5 leading-6 sm:py-20">
        <p className="font-medium font-inter">
          Exquisite sophisticated iconic cutting-edge laborum deserunt esse
          bureaux cupidatat id minim. Sharp classic the best commodo nostrud
          delightful. Conversation aute wifey id. Qui sunt remarkable deserunt
          intricate airport excepteur classic esse riot girl.
        </p>
      </div>
      <div className="p-10 sm:px-24 sm:pb-20">
        <p className="text-lg leading-8 font-thin font-inter">
          To know more about our process from design to execution, we recommend
          a video call so that we can deep dive into insights and case studies
          tailor-made for you. For a detailed interaction write to us
          meskolabs@gmail.com
        </p>
      </div>
    </>
  );
};

export default BkpkSolution;
