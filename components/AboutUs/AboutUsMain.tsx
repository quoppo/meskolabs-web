"use client";

import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Slider from "react-slick";
import { ContactForm } from "../common/contactForm";
import backgroundImage from "../../public/assets/dronesports.png";
import backgroundImage2 from "../../public/assets/kequel.png";
import backgroundImage3 from "../../public/assets/delta.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      "ideate",
      "design",
      "develop",
      "deliver",
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

  // Slick settings for the carousel
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false, // Hide arrows if you want to use dots only
  };

  return (
    <div>
      <div className="snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-hidden">
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
            <source src="/vid3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex sm:h-screen px-5 sm:px-12">
            <div>
              <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                <div className="text-2xl md:text-2xl pl-10 lg:text-2xl font-medium font-poppins pb-60" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                  <span
                    role="heading"
                    style={{
                      fontSize: "1.5em",
                      display: "inline-block",
                      lineHeight: "1.8",
                      color: "black",
                    }}
                  >
                    We{" "}
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      {text}
                    </span>
                    <Cursor />
                  </span>
                </div>
              </div>
            </div>

            <div className="text-xl md:text-xl lg:text-xl font-medium font-poppins absolute inset-x-0 bottom-5 left-10 pl-11 pb-80 pt-20 pr-80">
              <h2>Our expertise ensures that we meet the unique needs of our clients, driving innovation and delivering exceptional results.</h2>
            </div>
          </div>
        </div>
        <div className="snap-start relative w-screen h-screen grid place-items-center">
  <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 w-screen">
    <div className="mx-auto max-w-7xl lg:max-w-full">
      <Slider {...slickSettings}>
        <div className="p-8 text-left w-full">
          <blockquote className="text-2xl font-thin leading-6 font-inter text-black opacity-90 sm:text-3xl sm:leading-[4.5rem] lg:text-5xl lg:leading-[5rem] w-full">
            <h2>“Logic will get you from A to B</h2>
            <h2 className="pl-5">Imagination will take you everywhere”</h2>
          </blockquote>
          <figcaption className="mt-10 flex flex-col items-start text-base pl-5">
            <img className="h-16 w-16 rounded-full" src="assets\pranay.png" alt="Pranay Lingayat" />
            <div className="mt-4 flex flex-col items-center">
              <div className="font-semibold text-gray-900">Pranay Lingayat</div>
            </div>
          </figcaption>
        </div>
        {/* Add more slides as needed */}
        <div className="p-8 text-left w-full">
          <blockquote className="text-2xl font-thin leading-6 font-inter text-black opacity sm:text-3xl sm:leading-[4.5rem] lg:text-5xl lg:leading-[5rem] w-full">
            <h2 className="pr-40">“Creativity is allowing yourself to make mistakes. Design is knowing which ones to keep."</h2>
            <h2 className="pl-5">Imagination will take you everywhere”</h2>
          </blockquote>
          <figcaption className="mt-10 flex flex-col items-start text-base pl-5">
            <img className="h-16 w-16 rounded-full" src="assets\pranay.png" alt="Pranay Lingayat" />
            <div className="mt-4 flex flex-col items-center">
              <div className="font-semibold text-gray-900">Pranay Lingayat</div>
            </div>
          </figcaption>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  </section>
</div>
</div>
    </div>
  );
};

export default Main;
