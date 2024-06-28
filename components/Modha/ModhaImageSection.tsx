import React from "react";
import ImageCard from "../common/ImageCard";
import Image1 from "../../public/assets/modha/modhaProject1.png";
import Image2 from "../../public/assets/modha/modhaProject2.png";
import Image3 from "../../public/assets/modha/projectModha3.jpg";
import Image4 from "../../public/assets/modha/modhaProject4.png";
import Image5 from "../../public/assets/modha/modhaProject5.png";
import Image6 from "../../public/assets/modha/modhaProject6.png";
import Image7 from "../../public/assets/modha/modhaProject7.png";
import Image8 from "../../public/assets/modha/modhaProject8.png";
import Image9 from "../../public/assets/modha/modhaProject9.png";
import Image10 from "../../public/assets/modha/modhaProject10.jpeg";
import Image11 from "../../public/assets/modha/modhaProject11.jpeg";
import Image12 from "../../public/assets/modha/modhaProject12.jpeg";
import Image13 from "../../public/assets/modha/modhaProject13.jpeg";

const ModhaImageSection: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:px-10 items-center">
        <ImageCard imgPath={Image1} height={300} width={300} />
        <ImageCard imgPath={Image2} height={300} width={300} />
        <ImageCard imgPath={Image3} height={1500} width={1500} />
        <ImageCard imgPath={Image4} height={250} width={250} />
        <ImageCard imgPath={Image5} height={1500} width={1500} />
        <ImageCard imgPath={Image6} height={250} width={250} />
        <ImageCard imgPath={Image7} height={270} width={270} />
        <ImageCard imgPath={Image8} height={250} width={260} />
      </div>
      <div className="py-5 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-5 px-10 sm:px-24 items-center">
          <h4 className="text-gray-400 lg:w-1/6 text-2xl font-bold font-inter text-center lg:text-left">
            Ideation for modules
          </h4>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <ImageCard imgPath={Image9} height={400} width={400} />
            <ImageCard imgPath={Image10} height={400} width={400} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row px-10 sm:px-24 items-center justify-between">
          <ImageCard imgPath={Image11} height={400} width={400} />
          <ImageCard imgPath={Image12} height={400} width={400} />
          <ImageCard imgPath={Image13} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default ModhaImageSection;
