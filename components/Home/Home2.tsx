import React from 'react';
import { ContactForm } from "../common/contactForm";

const Home2: React.FC = () => {
  return (
   
      <div className="w-full h-full">
      <div className="relative bg-[#181818] h-screen  flex items-center justify-center text-center overflow-hidden">
   
    <div className="absolute inset-0 z-0">
        <img src="assets/home1.png" alt="Background Image" className="w-full h-screen object-cover" />
    </div>

   
    <div className="relative z-10 max-w-6xl mx-auto p-8  text-left">
  <p className="text-lg pt-20 font-regular text-white uppercase tracking-wide mb-4">
    Our goal is to bring your vision to life
  </p>
  <div className="flex w-full flex-col">
  <h1 className="text-white font-bold text-5xl md:text-5xl leading-tight mb-6 w-full">
    Transforming organisations with <br/>our comprehensive solutions in the <br/> form of Product Design & Development
  </h1>
</div>

  <button className="bg-white text-black py-3 px-20 rounded-lg hover:bg-gray-200">
      Contact Us
    </button>
</div>






</div>
<div className="relative bg-[#181818] h-screen  flex items-center justify-center text-center overflow-hidden">
   
   <div className="absolute inset-0 z-0">
       <img src="assets/midsection.png" alt="Background Image" className="w-full h-screen object-cover" />
   </div>
  {/* Content */}
  <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
    <div className="flex flex-col justify-center text-center md:text-left">
      <h3 className="text-lg md:pl-32 font-medium uppercase tracking-wide text-white">
        Our Benefits
      </h3>
      <h2 className="mt-2 pt-4 md:pt-4 md:pl-32 text-2xl text-white md:text-4xl font-medium">
        We are a team of designers and developers
      </h2>
    </div>
    <div className="flex items-start">
  <p className="leading-relaxed text-left text-sm md:text-base text-[#C4C4C4] md:pr-20">
    The text will be displayed here that explains our USP. The text will be displayed here that explains our USP. The text will be displayed here that explains our USP. The text will be displayed here that explains our USP.
    <br /><br />
    The text will be displayed here that explains our USP. The text will be displayed here that explains our USP. The text will be displayed here that explains our USP. The text will be displayed here that explains our USP.
  </p>
</div>

  </div>
</div>




<div className="relative bg-[#181818] h-full flex items-center justify-center text-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img src="assets/services.png" alt="Background Image" className="w-full h-full object-cover" />
  </div>
  <div id="services" className="grid place-items-start text-left overflow-y-auto p-4">
    <h1 className="text-3xl text-left text-white  sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight sm:leading-normal">
      Services
    </h1>
    <div className="space-y-10 pt-5">
      {[
        {
          number: "01",
          title: "Product Design & Development",
          description: "From conceptualization to market-ready prototypes, we ensure that every step of the design and development process is meticulously executed.",
        },
        {
          number: "02",
          title: "Embedded Hardware & SOFTWARE",
          description: "We specialize in developing custom hardware solutions that seamlessly integrate with software, providing you with the tools you need to innovate and stay ahead.",
        },
        {
          number: "03",
          title: "Website/App Design & Development",
          description: "Whether you're looking for an e-commerce platform, a dynamic corporate website, or a cutting-edge mobile app, we've got you covered with our web and app development services.",
        },
        {
          number: "04",
          title: "Prototype",
          description: "Dummy Text",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row justify-start items-start border-t border-gray-300 pt-4"
        >
          <div className="flex items-start space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-5xl text-white sm:text-5xl pt-10 font-bold">
                {service.number}
              </span>
              <div className="border-l-2 border-gray-300 h-full"></div>
            </div>
            <div className="pl-4 sm:pl-10 flex-1">
              <h2 className="text-4xl text-white sm:text-2xl pt-5 font-bold">
                {service.title}
              </h2>
              <p className="text-sm pt-5 pb-3 font-light text-white pr-4 sm:pr-20">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


        <div className="bg-black w-full h-full pl-4 sm:pl-20 font-poppins">
          <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white p-8 space-y-8 md:space-y-0 md:space-x-8">
            <div className="rounded-3xl md:w-1/2">
              <div className="flex flex-col items-center space-y-4 mt-4">
                <img
                  src="assets/step2.png"
                  alt="4 Keys to a Great Brand Story"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="uppercase tracking-wide text-white text-regular text-xl">
                Our Vision
              </h3>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium leading-tight sm:leading-normal">
                Tagline will be displayed <br /> here
              </h1>
              <div className="border-t border-white"></div>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#C4C4C4] pt-6 sm:pt-8 md:pt-10 leading-relaxed sm:leading-loose">
                The text will be displayed here that explains our USP. The text
                will
                <br />
                be displayed here that explains our USP.The text will be
                displayed <br />
                here that explains our USP.The text will be displayed here that
                <br />
                explains our USP.
                <br />
              </p>
              <a
                href="#"
                className="inline-block mt-4 font-regular text-xl pt-10 text-white hover:border-gray-300"
              >
                <span className="text-white">＋</span> Read More
              </a>
            </div>
          </div>
        </div>

        <div className="bg-black w-full pl-4 sm:pl-20 font-poppins">
          <ContactForm />
        </div>
      
  </div>
  );
};

export default Home2;
