"use client";

import React from "react";
import ReactDOM from 'react-dom';
import Footer from "@/components/Footer";

import ImageCard from "../common/ImageCard"; // Adjust the path as necessary

const Main2: React.FC = () => {
  const backgroundImage = "/assets/modha/banner1.png";

  const cardsData = [
    {
      imagePath: "/assets/modha/banner3.png",
      description: "The sunrise effect in furniture mimics a natural sunrise, gradually increasing light to wake you gently or create a calming ambiance."
    },
    {
      imagePath: "/assets/modha/banner4.png",
      description: "Charging sockets integrated into furniture provide convenient power access for your devices."
    },
    {
      imagePath: "/assets/modha/banner5.png",
      description: "Enhance your environment with our smart table's built-in aroma diffuser."
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
   
    <h3 className="text-xl text-black font-medium font-poppins leading-relaxed mb-4">
    Redefining Smart Functionality and <br/> Customization for Modern Lifestyles
    </h3>
  </div>
</div>



        {/* Second Section */}
        <div className="grid w-screen place-items-start pt-5  text-8xl">
   
            <div className="w-full flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full  flex flex-col md:flex-row md:space-x-4">
                <h2 className="text-3xl font-chivo md:text-5xl pl-10 pr-5 pt-5 w-full md:w-1/2 tracking-wider">
                We believe in Smart Living 
                </h2>
                <p className="text-lg font-chivo pl-10  pr-5 font-light text-black pt-5 md:w-1/2 mt-4 md:mt-0 tracking-wider">
                Why settle for furniture that is made for someone else? Discover the <br/>future of living with our smart furniture, seamlessly integrating <br/> technology and style to elevate your home.
                </p>
              </div>
            </div>


          <div className="flex justify-center pt-5 items-start w-full md:mt-0">
            <img
              src="/assets/modha/banner2.png"
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
       We understand your <br/> unique needs and lifestyle 
      </h2>
      <h2
        className="pt-3 sm:pt-4 md:pt-5 text-sm sm:text-2xl md:text-3xl lg:text-xl text-black font-light font-chivo text-left"
        style={{ lineHeight: "1.4" }}
        role="heading"
      >
        Our solution caters for all your needs 
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
        <source src="/assets/bkpk/vid4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="w-full lg:w-1/2 flex items-center justify-center">
      <div className="relative w-full h-0 pb-[56%] aspect-w-16 aspect-h-9">
        <img
          src="/assets/modha/banner7.png"
          alt="Your image description"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  <div className="w-full flex flex-col lg:flex-row justify-between items-center pl-11 pr-11 text-2xl pb-20 mt-5">
  <p className="text-center lg:text-left">
  Text hdied djejc ecieind wjiwinw dwiihfwj ncwic jcejcjn jjcejj ......read more
  </p>
  <button className="bg-black text-white py-3 px-6 rounded-full text-2xl mt-5 lg:mt-0 lg:ml-5">
  Buy Now
  </button>
</div>

</div>


  </div>

  <Footer/>
</div>



     
    
  );
};

export default Main2;
