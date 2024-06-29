import React from "react";
import ProjectCard from "../common/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="p-5 sm:p-10 flex flex-col gap-10 sm:gap-20 px-16 sm:px-28">
      <h2 className="text-3xl sm:text-5xl font-semibold font-inter text-center md:text-left">Our Projects</h2>
      <ProjectCard imgPath="/assets/modha-project.png" title="Modha(Smart Bedside table)" description="Redefining Smart Functionality and Customization for Modern Lifestyles" buttonNavigation="/modha-project"/>
      <ProjectCard imgPath="/assets/deltaRobots.png" title="Drone Sports" description="Introduced Drone Soccer in India, from developing innovative drone shells to constructing a state-of-the-art arena." buttonNavigation="/" />
      <ProjectCard imgPath="/assets/bkpkProject.jpg" title="BKPK" description="A versatile, ergonomic backpack designed for comfort, durability, and organized storage, tailored to meet diverse user needs and preferences." buttonNavigation="/bkpk" />
      <ProjectCard imgPath="/assets/deltaRobots.png" title="Delta Robots" description="Another subheading—maybe it's related to the image on the left, or the button below" buttonNavigation="/" />
      <ProjectCard imgPath="/assets/dlvrEase.jpeg" title="DLVR Ease" description="Friend Of Last Mile Drivers Bringing Smiles back.(Delivery bag)" buttonNavigation="/dlvr-ease"/>
    </div>
  );
};

export default Projects;
