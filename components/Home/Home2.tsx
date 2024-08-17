import React from 'react';
import { ContactForm } from "../common/contactForm";

const Home2: React.FC = () => {
  return (
  <><div className="bg-black w-full h-full p-20 font-poppins">
      <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white p-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className=" rounded-3xl md:w-1/2">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <img src="assets/step2.png" alt="4 Keys to a Great Brand Story" className="w-full h-auto rounded-lg" />
          </div>
        </div>
        <div className="md:w-1/2 space-y-4">
          <h3 className=" uppercase tracking-wide text-white text-regular text-xl">Our Vision</h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium leading-tight sm:leading-normal">
            Tagline will be displayed <br />  here
          </h1>
          <div className="border-t border-white"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#C4C4C4] pt-6 sm:pt-8 md:pt-10 leading-relaxed sm:leading-loose">
            The text will be displayed here that explains our USP. The text will<br />
            be displayed here that explains our USP.The text will be displayed <br />
            here that explains our USP.The text will be displayed here that <br />
            explains our USP.<br />
          </p>
          <a href="#" className="inline-block mt-4 font-regular text-xl pt-10 text-white  hover:border-gray-300">
            <span className="text-white">＋</span> Read More
          </a>
        </div>
      </div>
    </div>
    <div className="bg-black w-full  p-20 font-poppins">
    <ContactForm/>
    </div></>
  );
};

export default Home2;