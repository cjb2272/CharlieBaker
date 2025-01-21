import React from 'react';

const SideBarNavigation = ({ activeSection }) => {
  return (
    <div className="h-screen w-48 fixed bg-background border-r-2 border-tertiary">
      <nav className="h-full text-light font-medium">
        <ul className="h-full flex flex-col justify-center space-y-16">
          {/* className="hover:text-vibrant" */}
          <li className="px-2">
            <a href="#sectionContact" className={activeSection === "sectionContact" ? "selected-nav-section-custom" : ""}>Contact</a>
          </li>
          <li className="px-2">
            <a href="#sectionAbout" className={activeSection === "sectionAbout" ? "selected-nav-section-custom" : ""}>About</a>
          </li>
          <li className="px-2">
            <a href="#sectionProjects" className={activeSection === "sectionProjects" ? "selected-nav-section-custom" : ""}>Projects</a>
          </li>
          
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