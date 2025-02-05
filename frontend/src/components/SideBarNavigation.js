import React from 'react';
//import { Link } from "react-scroll";

const SideBarNavigation = ({ activeSection }) => {

  // could use a ref, as it is best practice to generally avoid direct DOM access (even though we arent maniplating)
  const handleSmoothScroll = (e, targetID) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetID); //static id reference could provide issues down line
    if (targetElement) {
      targetElement.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <div className="h-screen w-48 fixed bg-background border-r-2 border-tertiary">
      <nav className="h-full text-light font-medium">
        <ul className="h-full flex flex-col justify-center space-y-16">
          {/* className="hover:text-vibrant" */}
          <li className={activeSection === "sectionContact" ? "selected-nav-section-custom" : "px-2 text-center"}>
            {/* <Link to="sectionContact" smooth={true} duration={500} className='block py-2'>Contact</Link> */}
            <a href="#sectionContact" className="block py-2" onClick={(e) => {handleSmoothScroll(e, "sectionContact")}}>Contact</a>
          </li>
          <li className={activeSection === "sectionAbout" ? "selected-nav-section-custom" : "px-2 text-center"}>
            {/* <Link to="sectionAbout" smooth={true} duration={500} className='block py-2'>About</Link> */}
            <a href="#sectionAbout" className="block py-2" onClick={(e) => {handleSmoothScroll(e, "sectionAbout")}}>About</a>
          </li>
          <li className={activeSection === "sectionProjects" ? "selected-nav-section-custom" : "px-2 text-center"}>
            {/* <Link to="sectionProjects" smooth={true} duration={500} className='block py-2'>Projects</Link> */}
            <a href="#sectionProjects" className="block py-2" onClick={(e) => {handleSmoothScroll(e, "sectionProjects")}}>Projects</a>
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