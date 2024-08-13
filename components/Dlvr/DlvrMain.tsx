"use client";

import React from "react";
import ImageCard from "../common/ImageCard"; // Adjust the path as necessary

const Main2: React.FC = () => {
  const backgroundImage = "/assets/Dlvr/banner1.png";

  const ImageCardList = () => {
    const image1 = "/assets/dlvr/banner3.png";
    const image2 = "/assets/dlvr/banner4.png";
    const image3 = "/assets/dlvr/banner5.png";

    return (
      <div className="flex justify-center items-start space-x-3">
        <ImageCard
          image={image1}
          title=""
          description="The modular nature allows for quick swapping of different end effectors to adapt the robot for various applications"
        />

        <ImageCard
          image={image2}
          title=""
          description="The carbon fiber in delta robot’s arm offers a high strength-to-weight ratio."
        />

        <ImageCard
          image={image3}
          title=""
          description="Offers a flexible structure and accurate placement of the end effector."
        />
      </div>
    );
  };

  return (
    <div>
      <script src="https://cdn.tailwindcss.com"></script>
      <div className=" h-screen w-screen mx:auto overflow-x-hidden">
        {/* First Section */}
        <div className=" grid w-screen h-screen place-items-center text-8xl">
  <div
    className="bg-cover bg-center bg-no-repeat w-screen h-screen flex items-start pl-8"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
  <div className="text-left pt-60 pl-4 md:pl-20">
  <h3 className="text-xl text-black font-medium font-poppins leading-relaxed mb-4">
    Unleashing Speed and Accuracy with Delta Robot
  </h3>
</div>


  </div>
</div>

        {/* Second Section */}
        <div className="grid w-screen h-screen place-items-center text-8xl">
          <div className="flex items-start w-full">
            <div className="w-full flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full pl-5 flex flex-col md:flex-row md:space-x-4">
                <h2 className="text-3xl md:text-5xl w-full md:w-1/2">
                  Implement efficiency & precision
                </h2>
                <p className="text-lg text-black w-full md:w-1/2 mt-4 md:mt-0 pr-20">
                  Why invest in operational costs, when Delta robots can boost both
                  efficiency and precision? Their swift, accurate movements in tasks
                  like pick, place, and 3D printing, reduce cycle times and enhance
                  productivity, ensuring consistent quality.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:mt-0">
            <img
              src="/assets/dlvr/banner2.png"
              alt="Descriptive Alt Text"
              className="w-full md:w-3/4 h-auto object-contain"
            />
          </div>
        </div>

        {/* Third Section */}
        <div className=" grid w-screen h-screen place-items-center text-8xl">
          <div className="justify-items-start ">
            <div className="w-full px-4 lg:px-10 pr-6 md:pr-8 lg:pr-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-black font-medium pr-10 font-poppins text-left"
                style={{ lineHeight: "1.2" }}
                role="heading"
              >
                Designed to deliver precision and cater <br /> to your individual
                requirements
              </h2>
              <h2
                className="pt-3 sm:pt-4 pr-10 lg:pt-5 text-sm sm:text-base md:text-base lg:text-base text-black font-medium font-poppins text-left"
                style={{ lineHeight: "1.4" }}
                role="heading"
              >
                Delta robot’s swift, accurate movements reduce cycle times and
                enhance productivity, ensuring consistent quality and lower
                operational costs.
              </h2>
            </div>

            <div className="flex justify-center items-center space-x-5 mt-8">
              <ImageCardList />
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className=" grid w-full place-items-center text-8xl">

        <div className="flex flex-col lg:flex-row  px-4 lg:px-4">
    <div className="w-full lg:w-1/2 mb-5 lg:mb-0"> 
      <video className="w-full" controls autoPlay muted>
        <source src="/assets/Dlvr/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="w-full lg:w-1/2 flex items-center justify-center ">
  <div className="relative w-full h-0 pb-[56%] aspect-w-16 aspect-h-9">
    <img
      src="/assets/Dlvr/banner5.png"
      alt="Your image description"
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
</div>

</div>

  

  <div className="flex flex-col lg:flex-row justify-between items-start p-5 lg:p-10">
    <div className="text-left lg:w-4/6">
      <h2
        className="text-base pl-28 md:text-lg lg:text-xl text-black font-medium font-poppins"
        role="heading"
        style={{ lineHeight: 1.8 }}
      >
        Swift, accurate movements reduce cycle times and enhance productivity, ensuring consistent quality and lower operational costs.
      </h2>
    </div>
    <div className="flex items-center justify-center lg:items-end lg:pr-28 pt-5 lg:pt-0">
      <button className="text-base bg-black text-white rounded-full pl-3 py-2 px-6 whitespace-nowrap hover:bg-gray-800 transition-colors duration-300">
        Join/Reach Out
      </button>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default Main2;
