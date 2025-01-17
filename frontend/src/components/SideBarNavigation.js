import React from 'react';

const SideBarNavigation = () => {
  return (
    <div className="h-screen w-48 fixed bg-background border-r-2 border-tertiary">
      <nav className="h-full flex flex-col justify-center items-center space-y-16 text-light font-medium">
        <ul>
          <li><a href="#sectionContact" className={activeSection === "sectionContact" ? "active" : ""}>Contact</a></li>
          <li><a href="#sectionAbout" className={activeSection === "sectionAbout" ? "active" : ""}>About</a></li>
          <li><a href="#subSectionGeneral" className={activeSection === "subSectionGeneral" ? "active" : ""}>General</a></li>
          <li><a href="#subSectionEducation" className={activeSection === "subSectionEducation" ? "active" : ""}></a>Education</li>
          <li><a href="#subSectionTravel" className={activeSection === "subSectionTravel" ? "active" : ""}></a>Travel</li>
          <li><a href="#sectionProjects" className={activeSection === "sectionProjects" ? "active" : ""}>Projects</a></li>
          <li><a href="#subSectionSpotifyProj" className={activeSection === "subSectionSpotifyProj" ? "active" : ""}>Playlist Automation GPT</a></li>
          <li><a href="#subSectionRBSProj" className={activeSection === "subSectionRBSProj" ? "active" : ""}></a>Reporting Tool</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBarNavigation;