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
        <ul className="h-full mt-20 flex flex-col space-y-3">
          {/* className="hover:text-vibrant" */}
          <li className={activeSection === "sectionContact" ? "selected-nav-section-custom" : "nav-section-li-default"}>
            {/* <Link to="sectionContact" smooth={true} duration={500} className='block py-2'>Contact</Link> */}
            <a href="#sectionContact" className="nav-main-section-a" onClick={(e) => {handleSmoothScroll(e, "sectionContact")}}>Contact</a>
          </li>

          <li className={activeSection === "sectionAbout" ? "selected-nav-section-custom" : "nav-section-li-default"}>
            <a href="#sectionAbout" className="nav-main-section-a" onClick={(e) => {handleSmoothScroll(e, "sectionAbout")}}>About</a>
          </li>

          <li className={activeSection === "subSectionGeneral" ? "selected-nav-section-custom" : "nav-section-li-default"}>
            <a href="#subSectionGeneral" className="nav-sub-section-a" onClick={(e) => {handleSmoothScroll(e, "subSectionGeneral")}}>General</a>
          </li>
          <li className={activeSection === "subSectionEducation" ? "selected-nav-section-custom" : "nav-section-li-default"}>
            <a href="#subSectionEducation" className="nav-sub-section-a" onClick={(e) => {handleSmoothScroll(e, "subSectionEducation")}}>Education</a>
          </li>
          <li className={activeSection === "subSectionTravel" ? "selected-nav-section-custom" : "nav-section-li-default"}>
            <a href="#subSectionTravel" className="nav-sub-section-a" onClick={(e) => {handleSmoothScroll(e, "subSectionTravel")}}>Travel</a>
          </li>

          <li className={activeSection === "sectionProjects" ? "selected-nav-section-custom" : "nav-section-li-default"}>
            <a href="#sectionProjects" className="nav-main-section-a" onClick={(e) => {handleSmoothScroll(e, "sectionProjects")}}>Projects</a>
          </li>

          <li className={activeSection === "subSectionSpotifyProj" ? "selected-nav-section-custom" : "nav-section-li-default"}>
            <a href="#subSectionSpotifyProj" className="nav-sub-section-a" onClick={(e) => {handleSmoothScroll(e, "subSectionSpotifyProj")}}>Playlist GPT</a>
          </li>
          <li className={activeSection === "subSectionRBSProj" ? "selected-nav-section-custom" : "nav-section-li-default"}>
            <a href="#subSectionRBSProj" className="nav-sub-section-a" onClick={(e) => {handleSmoothScroll(e, "subSectionRBSProj")}}>Reporting Tool</a>
          </li> 
          
          {/*
          <li><a href="#sectionAbout" className={activeSection === "sectionAbout" ? "active" : ""}>About</a></li>
          */}
        </ul>
      </nav>
    </div>
  );
};

export default SideBarNavigation;