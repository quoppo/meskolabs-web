"use client";

import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ContactForm } from "../common/contactForm";
import backgroundImage from "../../public/assets/dronesports.png";
import backgroundImage2 from "../../public/assets/kequel.png";
import backgroundImage3 from "../../public/assets/delta.png";
import backgroundImage4 from "../../public/assets/dlvr.png";

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
  const [text2] = useTypewriter({
    words: [
      "Our services",
    
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 70,
    delaySpeed: 100,
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      event.target.reset();
    } else {
      console.log("Error sending message");
      setLoading(false);
    }
  }

  return (
  
      <div className="snap-y snap-mandatory h-screen w-screen  overflow-x-hidden">
        <div>
        <div className="snap-start relative w-screen h-screen grid place-items-center">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 object-cover w-full h-full"
            style={{
              zIndex: -1,
            }}
          >
            <source src="/bgvid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex pt-60 flex-col items-start sm:h-screen px-5 sm:px-12">
  <div className="text-3xl md:text-4xl lg:text-5xl font-medium font-poppins pr-0 sm:pr-60 ">
    <span
      role="heading"
      style={{
        fontSize: "0.8em",
        display: "inline-block",
        lineHeight: "1.8",
        color: "black",
      }}
    >
      Transforming organisations with our comprehensive solutions in the form of{" "}
      <span style={{ color: "darkblue", fontWeight: "bold" }}>
        {text}
      </span>
      <Cursor />
    </span>
  </div>
  <div className="mt-10 lg:ml-4">
    <button className="bg-black text-white p-3 px-6 text-xs sm:text-sm md:text-base lg:text-lg rounded-full hover:bg-white hover:text-black border-2 border-black font-inter font-medium">
      Know more about us
    </button>
  </div>
</div>

        </div>
        {/* <div
  className="snap-start grid w-screen h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/public/assets/dronesports.png')",
  }}
>
  <div
    className="w-full h-full flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: `url(${backgroundImage.src})`,
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="flex flex-col justify-center items-start w-full max-w-screen-lg h-full p-4 sm:p-6 md:p-8 lg:p-10">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium font-poppins text-left lg:pl-20 xl:pl-40"
        style={{ lineHeight: "1.4" }}
        role="heading"
      >
        Drone Sports India
      </h2>
      <h2
        className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium font-poppins mt-4 text-left lg:pl-20 xl:pl-40"
        style={{ lineHeight: "1.4" }}
        role="heading"
      >
        A project by Mesckolabs and XCompany's visionary collaboration
      </h2>
      <div className="mt-6 text-left lg:pl-20 xl:pl-40">
        <a href="/dronesports">
          <button className="bg-white text-black p-4 px-6 text-sm rounded-full hover:bg-black hover:text-white border-2 border-white font-inter font-medium">
            Know more
          </button>
        </a>
      </div>
    </div>
  </div>
</div> */}

<div
  className="snap-start grid w-screen h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/public/assets/dronesports.png)", // Ensure this path is correct
  }}
>
  <div
    style={{
      backgroundImage: `url(${backgroundImage.src})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
    }}
    className="flex items-center justify-center"
  >
    <div className="flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-10 max-w-lg">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium font-poppins text-left lg:pl-20 xl:pl-40"
        style={{ lineHeight: "1.4" }}
        role="heading"
      >
        Drone Sports India
      </h2>
      <h2
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium font-poppins mt-4 text-left lg:pl-20 xl:pl-40"
        style={{ lineHeight: "1.2" }}
        role="heading"
      >
        A project by Mesckolabs and Drone Sports India's visionary collaboration
      </h2>
      <div className="mt-6 text-left lg:pl-20 xl:pl-40">
        <a href="/kequel">
          <button className="bg-white text-black p-4 px-6 text-sm rounded-full hover:bg-black hover:text-white border-2 border-white font-inter font-medium">
            Know More
          </button>
        </a>
      </div>
    </div>
  </div>
</div>



<div
  className="snap-start grid w-screen h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/publicassetskequel.png')", // Ensure this path is correct
  }}
>
  <div
    style={{
      backgroundImage: `url(${backgroundImage2.src})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
    }}
    className="flex items-center justify-center"
  >
    <div className="flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-10 max-w-lg">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium font-poppins text-left lg:pl-20 xl:pl-40"
        style={{ lineHeight: "1.4" }}
        role="heading"
      >
        Kequel (Smart Bedside Table)
      </h2>
      <h2
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium font-poppins mt-4 text-left lg:pl-20 xl:pl-40"
        style={{ lineHeight: "1.4" }}
        role="heading"
      >
        Redefining Smart Functionality and Customization for Modern Lifestyles
      </h2>
      <div className="mt-6 text-left lg:pl-20 xl:pl-40">
        <a href="/kequel">
          <button className="bg-white text-black p-4 px-6 text-sm rounded-full hover:bg-black hover:text-white border-2 border-white font-inter font-medium">
            Know More
          </button>
        </a>
      </div>
    </div>
  </div>
</div>

<div
  className="snap-start grid w-screen h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/publicassetsdelta.png')", // Ensure this path is correct
  }}
>
  <div
    style={{
      backgroundImage: `url(${backgroundImage3.src})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
    }}
    className="flex items-center justify-center"
  >
    <div className="flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-10 max-w-lg">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium font-poppins text-left lg:pl-20 xl:pl-40"
        style={{ lineHeight: "1.4" }}
        role="heading"
      >
        Delta Robot
      </h2>
      <h2
        className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium font-poppins mt-4 text-left lg:pl-20 xl:pl-40"
        style={{ lineHeight: "1.4" }}
        role="heading"
      >
        Unleashing Speed and Accuracy with Delta Robotics
      </h2>
      <div className="mt-6 text-left lg:pl-20 xl:pl-40">
        <a href="/delta-robotics">
          <button className="bg-white text-black p-4 px-6 text-sm rounded-full hover:bg-black hover:text-white border-2 border-white font-inter font-medium">
            Know More
          </button>
        </a>
      </div>
    </div>
  </div>
</div>

<div
  className="snap-start grid w-screen h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/public/assets/dlvr.png')", // Ensure the path is correct
  }}
>
  <div
    style={{
      backgroundImage: `url(${backgroundImage4.src})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
    }}
    className="flex items-center justify-center"
  >
    <div className="flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-10 max-w-lg">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium font-poppins text-left lg:pl-20 xl:pl-40"
        style={{ lineHeight: "1.4" }}
        role="heading"
      >
        DLVR
      </h2>
      <h2
        className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium font-poppins text-left mt-4 lg:pl-20 xl:pl-40"
        style={{ lineHeight: "1.4" }}
        role="heading"
      >
        Friend Of Last Mile Drivers
        <br />
        Bringing Smiles Back (Delivery Bag)
      </h2>
      <div className="mt-6 text-left lg:pl-20 xl:pl-40">
        <a href="/dlvr">
          <button className="bg-white text-black p-4 px-6 text-sm rounded-full hover:bg-black hover:text-white border-2 border-white font-inter font-medium">
            Know More
          </button>
        </a>
      </div>
    </div>
  </div>
</div>



<div
  id="services"
  className="snap-start grid w-screen h-screen place-items-start text-8xl bg-white overflow-y-auto"
>
  <div className="space-y-8 px-4 sm:px-8 md:px-16 lg:px-16 xl:px-24 pt-5">
    <span
      role="heading"
      className="text-xl md:text-sm lg:text-base xl:text-lg"
      style={{
        lineHeight: "1.8",
        color: "black",
      }}
    >
      <span className="text-black text-5xl font-normal">
        {text2}
      </span>
      <Cursor />
    </span>

    {[
      {
        number: "01",
        title: "Product Design & Development",
        description:
          "From conceptualization to market-ready prototypes, we ensure that every step of the design and development process is meticulously executed.",
      },
      {
        number: "02",
        title: "Embedded Hardware & SOFTWARE",
        description:
          "We specialize in developing custom hardware solutions that seamlessly integrate with software, providing you with the tools you need to innovate and stay ahead.",
      },
      {
        number: "03",
        title: "Website/App Design & Development",
        description:
          "Whether you're looking for an e-commerce platform, a dynamic corporate website, or a cutting-edge mobile app, we've got you covered with our web and app development services.",
      },
      {
        number: "04",
        title: "Prototype",
        description: "Dummy Text",
      },
    ].map((service, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row justify-between items-start border-t border-gray-300 pt-4"
      >
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl pt-10 font-bold">
              {service.number}
            </span>
            <div className="border-l-2 border-gray-300 h-full"></div>
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-lg sm:text-xl pt-10 font-bold">{service.title}</h2>
            <p className="text-sm">{service.description}</p>
          </div>
        </div>
        <div className="pt-10">
          <a href="#contactUs">
            <button className="bg-black text-white p-2 px-4 text-xs sm:text-sm rounded-full hover:bg-white hover:text-black border-2 border-white mt-2 font-inter font-medium flex items-center space-x-2">
              <span>Contact Us</span>
            </button>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>


        <div
          id="contactUs"
          className="snap-start grid w-screen h-screen place-items-start text-8xl"
          style={{ backgroundColor: "white" }}
        >
          <div className="bg-white shadow-md rounded px-6 pr-10 pt-4 pb-6 mb-4 w-full max-w-full h-full flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>
        </div>
    </div>

  );
};

export default Main;