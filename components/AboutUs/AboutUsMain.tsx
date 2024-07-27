"use client";

import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ContactForm } from "../common/contactForm";
import backgroundImage from "../../public/assets/dronesports.png";
import backgroundImage2 from "../../public/assets/kequel.png";
import backgroundImage3 from "../../public/assets/delta.png";

const Main: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      "ideate",
      "design",
      "develop",
      "deliver",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 1000,
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

            <div className="text-xl md:text-xl lg:text-xl font-medium font-poppins absolute inset-x-0 bottom-5 left-10 pl-10 pb-80 pt-20 pr-80">
             <h2>Our expertise ensures that we meet the unique needs of our clients, driving innovation and delivering exceptional results.</h2>
            </div>
          </div>
        </div>
             </div>
    </div>
  );
};

export default Main;
