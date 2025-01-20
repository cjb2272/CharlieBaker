import React from 'react';

const SideBarNavigation = ({ activeSection }) => {
  return (
    <div className="h-screen w-48 fixed bg-background border-r-2 border-tertiary">
      <nav className="h-full text-light font-medium">
        <ul className="h-full flex flex-col justify-center items-center space-y-16">
          {/*  className="hover:text-vibrant" */}
          <li><a href="#sectionContact" className={activeSection === "sectionContact" ? "text-vibrant" : ""}>Contact</a></li>
          <li><a href="#sectionAbout" className={activeSection === "sectionAbout" ? "text-vibrant" : ""}>About</a></li>
          <li><a href="#sectionProjects" className={activeSection === "sectionProjects" ? "text-vibrant" : ""}>Projects</a></li>
          
          {/* <li><a href="#subSectionSpotifyProj" className={activeSection === "subSectionSpotifyProj" ? "text-vibrant" : ""}>Playlist Automation GPT</a></li>
          <li><a href="#subSectionRBSProj" className={activeSection === "subSectionRBSProj" ? "text-vibrant" : ""}></a>Reporting Tool</li> */}
          
          {/*
          <li><a href="#sectionAbout" className={activeSection === "sectionAbout" ? "active" : ""}>About</a></li>
          <li><a href="#subSectionGeneral" className={activeSection === "subSectionGeneral" ? "active" : ""}>General</a></li>
          <li><a href="#subSectionEducation" className={activeSection === "subSectionEducation" ? "active" : ""}></a>Education</li>
          <li><a href="#subSectionTravel" className={activeSection === "subSectionTravel" ? "active" : ""}></a>Travel</li>*/}
        </ul>
      </nav>
    </div>
  );
};

export default SideBarNavigation;