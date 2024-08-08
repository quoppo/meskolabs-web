"use client";

import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Slider from "react-slick";
import { ContactForm } from "../common/contactForm";
import backgroundImage4 from "../../public/assets/bg5.png"

import backgroundImage from "../../public/assets/dronesports.png";
import backgroundImage2 from "../../public/assets/kequel.png";
import backgroundImage3 from "../../public/assets/delta.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slideLeft = {
  animation: 'slide-left 1s ease-out'
};

const styles = `
@keyframes slide-left {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
`;


const texts = [
  {
    title: 'At Meskolabs, we bring purpose and design together to turn ideas into solutions.',
    description: 'We are a team of designers and developers dedicated to creating memorable experiences that not only captivate but also solve real problems. We partner with ambitious companies to scale their products and people by combining exceptional design skills with advanced hardware and software services.',
  },
  {
    title: 'At 2 Meskolabs, we bring purpose and design together to turn ideas into solutions.',
    description: 'We are a team of designers and developers dedicated to creating memorable experiences that not only captivate but also solve real problems. We partner with ambitious companies to scale their products and people by combining exceptional design skills with advanced hardware and software services.',
  },
  {
    title: 'At 3 Meskolabs, we bring purpose and design together to turn ideas into solutions.',
    description: 'We are a team of designers and developers dedicated to creating memorable experiences that not only captivate but also solve real problems. We partner with ambitious companies to scale their products and people by combining exceptional design skills with advanced hardware and software services.',
  },
];

const TextSwitcher: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change text every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-container">
      <h1 className="fade-in-out text-4xl pl-20 w-2/3 text-white text-left">{texts[index].title}</h1>
      <p className="fade-in-out pl-20 w-2/3 text-white text-left">{texts[index].description}</p>
    </div>
  );
};

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
      <style jsx>{`
        .text-container {
          text-align: left;
          color: white;
          position: relative;
          z-index: 1;
          padding-left: 2rem; /* Add padding for left alignment */
        }
        .fade-in-out {
          animation: fadeInOut 10s infinite;
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
      `}</style>

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

            
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl font-medium font-poppins absolute inset-x-0 left-10 pl-5 md:pl-10 lg:pl-10 pt-20 pr-10 lg:pr-20 text-left">
  <h2>Our expertise ensures that we meet the unique needs of our clients, driving innovation and delivering exceptional results.</h2>
</div>

        </div>
        <div className="snap-start grid w-screen h-screen place-items-center text-8xl">
  <div
    style={{
      backgroundImage: `url(${backgroundImage4.src})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100%",
    }}
    className="flex items-end justify-start relative"
  >
    
 
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
  <div className="text-black text-3xl md:text-5xl w-full md:w-2/3 bg-opacity-50 pb-16 md:pb-60 pl-4 md:pl-10 text-chivo bg-white">
    At Meskolabs, we bring purpose <br/> and design together to turn ideas <br/> into solutions.
  </div>
  <div className="text-black text-base md:text-xl w-full md:w-1/2 bg-opacity-50 pb-40 md:pb-16 pr-4 md:pr-10 text-chivo bg-white md:ml-0 ml-3">
    We are a team of designers and developers dedicated to creating memorable experiences that not only captivate but also solve real problems. We partner with ambitious companies to scale their products and people by combining exceptional design skills with advanced hardware and software services.
  </div>
</div>


</div>
</div>



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
            <source src="/bgvid4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <TextSwitcher />
        </div>

        <div className="snap-start relative w-screen h-screen grid place-items-center">
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 w-screen">
            <div className="mx-auto max-w-7xl lg:max-w-full">
              <Slider {...slickSettings}>
                <div className="p-8 text-left w-full">
                  <blockquote className="text-2xl font-thin leading-6 font-inter text-black opacity-90 sm:text-3xl sm:leading-[4.5rem] lg:text-5xl lg:leading-[5rem] w-full text-left">
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
                <div className="p-8 text-left w-full">
                  <blockquote className="text-2xl font-thin leading-6 font-inter text-black opacity sm:text-3xl sm:leading-[4.5rem] lg:text-5xl lg:leading-[5rem] w-full text-left">
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
