
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import backgroundImage from "../../public/assets/dronesports.png";
import backgroundImage2 from "../../public/assets/kequel.png";
import backgroundImage3 from "../../public/assets/delta.png";
import backgroundImage4 from "../../public/assets/dlvr.png";
import { ContactForm } from "../common/contactForm";
import { useTypewriter, Cursor } from 'react-simple-typewriter';


import { useState } from "react";
import Header from "../Header";

const Main: React.FC = () => {
    const [text] = useTypewriter({
      words: [
        "web & app development",
        "embedded hardware services",
        "product design & development",
        "prototyping",
      ],
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 50,
      delaySpeed: 1000,
    });
    }
  
return (
    <div>
      <script src="https://cdn.tailwindcss.com"></script>
      <div>
        <div className="snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-hidden">
          {/*  */}
          <div
            className="snap-start grid w-screen h-screen place-items-center text-8xl"
          >
                 <div className="flex justify-center items-center h-screen">
                <div className="px-10 sm:px-8 flex flex-col ">
                  <h3
                    className="text-xl md:text-xl lg:text-xl pr-80 text-black font-medium font-poppins pl-10"
                    style={{ lineHeight: "1.8" }}
                    role="heading"
                  >
                    Unleashing speed and accuracy with Delta Robotics
                  </h3>

                  {/* <p className="text-gray-500 text-lg font-inter"> */}
                  {/* And a subheading describing your site, too                   */}
                  {/* </p> */}
                  <div className="pl-10">
                    <button className="bg-black pl-10 pb-5 text-white p-5 px-10 text-sm rounded-full hover:bg-white hover:text-black border-2 border-black mt-1 font-inter font-medium">
                      Know more
                    </button>
                  </div>
                </div>
                <div className="text-left">
                  <h2
                    className="h-screen lg:w-4/6 pt-5 text-base md:text-base lg:text-base text-black font-medium font-poppins pl-5"
                    role="heading"
                    style={{ lineHeight: 1.8 }}
                  >
                    Unleashing speed and accuracy with Delta Robotics
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className="snap-start grid w-screen h-screen place-items-center text-8xl"
            style={{
              backgroundImage: "url('publicassetsDlvr\banner2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className=" object-cover "
              style={{
                // use the src property of the image object
                backgroundImage: `url(${backgroundImage2.src})`,
                // other styles
                backgroundPosition: "center",
                backgroundSize: "85%",
                backgroundRepeat: "no-repeat",
                width: "90vw",
                height: "90vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="flex justify-start items-start h-screen">
                <div className="flex flex-col pl-2">
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl text-black font-medium font-poppins whitespace-nowrap"
                    style={{ lineHeight: "2.0" }}
                    role="heading"
                  >
                    Implement efficiency
                  </h2>
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl text-black font-medium font-poppins whitespace-nowrap"
                    style={{ lineHeight: "2.0" }}
                    role="heading"
                  >
                    and precision
                  </h2>
                </div>

                <div className="flex flex-col  top-0 right-0">
                  <h2
                    className=" pl-60 pt-5 text-base md:text-base lg:text-base text-black font-medium font-poppins whitespace-normal text-justify "
                    style={{ lineHeight: "1.9" }}
                    role="heading"
                  >
                    Why invest in operational costs, when Delta robots can boost
                    both efficiency and precision? Their swift, accurate
                    movements in tasks like pick, place, and 3D printing, reduce
                    cycle times and enhance productivity, ensuring consistent
                    quality
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-start grid w-screen h-screen place-items-center text-8xl">
            <div className="justify-items-start h-screen">
              <div className="  lg:w-4/6">
                <h2
                  className=" text-2xl md:text-4xl  lg:text-5xl text-black font-medium font-poppins content-start pl-10"
                  style={{ lineHeight: "1.2" }}
                  role="heading"
                >
                  Designed to deliver precision and cater to your individual
                  requirements
                </h2>
                <h2
                  className=" pt-5 text-base md:text-bse lg:text-base text-black font-medium font-poppins pl-10"
                  style={{ lineHeight: "1.4" }}
                  role="heading"
                >
                  Delta robot’s swift, accurate movements reduce cycle times and
                  enhance productivity, ensuring consistent quality and lower
                  operational costs.
                </h2>
                {/* <p className="text-gray-500 text-lg font-inter"> */}
                {/* And a subheading describing your site, too                   */}
                {/* </p> */}
              </div>
              <div className="flex justify-center items-center space-x-8 mt-8">
                <ImageCardList />
              </div>
            </div>
          </div>

          <div className="snap-start grid w-screen h-screen place-items-center text-8xl">
            <div className="flex">
              <div className="w-1/2 h-screen flex items-center justify-center">
                {/* Video container */}
                <video className="w-full h-full" controls>
                  <source src="/assets/Dlvr/vid.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="w-1/2 h-screen relative flex justify-end">
              <img
                src="/assets/Dlvr/banner5.png"
                alt="Sample Image"
                className="absolute inset-6 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
