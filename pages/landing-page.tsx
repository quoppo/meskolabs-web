import React from "react";
import Main from "@/components/Home/Main";
import FooterHeading from "@/components/Home/FooterHeading";
import Projects from "@/components/Home/Projects";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Main />
      <Projects />
      <FooterHeading />
    </div>
  );
};

export default LandingPage;
