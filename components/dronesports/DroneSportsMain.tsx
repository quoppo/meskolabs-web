"use client";

import React from "react";
import ReactDOM from 'react-dom';
import Footer from "@/components/Footer";

import ImageCard from "../common/ImageCard"; // Adjust the path as necessary

const Main2: React.FC = () => {
  const backgroundImage = "/assets/dronesports/banner1.png";

  const cardsData = [
    {
      imagePath: "/assets/dronesports/banner3.png",
      description: "Our arena setup features breathtaking visuals and immersive environments to provide an unforgettable experience."
    },
    {
      imagePath: "/assets/dronesports/banner4.png",
      description: "Take command with our cutting-edge drone remote, offering intuitive controls and unparalleled precision."
    },
    {
      imagePath: "/assets/dronesports/banner5.png",
      description: "Experience the future of flight with our high-performance drones, engineered for agility, speed."
    }
  ];

  return (
    <div>
      <script src="https://cdn.tailwindcss.com"></script>
      <div className=" h-screen w-screen mx:auto overflow-x-hidden">
        {/* First Section */}
       
        <div
  className="bg-cover bg-center bg-no-repeat w-screen h-full flex items-start pl-8"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div className="text-left pt-60 pl-4 md:pl-20">
    <h2 className="text-8xl text-white font-bold font-poppins mb-2">
      Drone Sports 
    </h2>
    <h3 className="text-xl text-white font-medium font-poppins leading-relaxed mb-4">
      A project by Meskolabs and Drone Sports India's visionary collaboration
    </h3>
  </div>
</div>



        {/* Second Section */}
        <div className="grid w-screen place-items-start pt-5  text-8xl">
   
            <div className="w-full flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full  flex flex-col md:flex-row md:space-x-4">
                <h2 className="text-3xl font-chivo md:text-5xl pl-10 pr-5 pt-5 w-full md:w-1/2 tracking-wider">
                Innovation in the skies
                </h2>
                <p className="text-lg font-chivo pl-10  pr-5 font-light text-black pt-5 md:w-1/2 mt-4 md:mt-0 tracking-wider">
                Experience the thrill of high-speed aerial races and cutting-edge drone <br/> technology with Drone Sports India. Join us as we redefine the future <br/> of sports with exhilarating competitions and state-of-the-art drones.
                </p>
              </div>
            </div>


          <div className="flex justify-center pt-5 items-start w-full md:mt-0">
            <img
              src="/assets/dronesports/banner2.png"
              alt="Descriptive Alt Text"
              className="w-full p-10 h-auto object-contain"
            />
          </div>
        </div>

        {/* Third Section */}
        <div className="grid  place-items-start text-8xl p-4">
  <div className="w-full">
    <div className="px-4 lg:px-10 pr-6 md:pr-8 lg:pr-12">
      <h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-regular pr-0 sm:pr-2 md:pr-4 lg:pr-6 font-Chivo text-left"
        style={{ lineHeight: "1.2" }}
        role="heading"
      >
        Discover Innovation in Flight:  <br className="hidden sm:block" /> Our Precision-Driven Drone Hoop Showdown
      </h2>
      <h2
        className="pt-3 sm:pt-4 md:pt-5 text-sm sm:text-2xl md:text-3xl lg:text-xl text-black font-light font-chivo text-left"
        style={{ lineHeight: "1.4" }}
        role="heading"
      >
        Unleashing cutting-edge technology for thrilling aerial competitions, where two teams control nimble quadcopter drones. Maneuver <br/>through a netted arena and aim for vertical hoops to score.
      </h2>
    </div>
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-5 gap-4">
        {cardsData.map((card, index) => (
          <ImageCard 
            key={index}
            imagePath={card.imagePath} 
            altText={`Image ${index + 1}`} 
            description={card.description} 
          />
        ))}
      </div>
    </div>
  </div>
</div>

{/* Fourth Section */}
<div className="grid place-items-center text-8xl">
  <div className="flex flex-col w-screen pl-11 pr-11 lg:flex-row">
    <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
      <video className="w-full" controls loop autoPlay muted>
        <source src="/assets/Dlvr/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="w-full lg:w-1/2 flex items-center justify-center">
      <div className="relative w-full h-0 pb-[56%] aspect-w-16 aspect-h-9">
        <img
          src="/assets/dronesports.png"
          alt="Your image description"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  <div className="w-full flex flex-col lg:flex-row justify-between items-center pl-11 pr-11 text-2xl pb-20 mt-5">
  <p className="text-center lg:text-left">
  Indulge your self in competitive arial games 
  </p>
  <button className="bg-black text-white py-3 px-6 rounded-full text-2xl mt-5 lg:mt-0 lg:ml-5">
  Join/Reach Out
  </button>
</div>

</div>


  </div>

  <Footer/>
</div>



     
    
  );
};

export default Main2;
