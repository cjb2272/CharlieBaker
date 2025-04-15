import React from 'react';

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
          <li className={activeSection === "sectionContact" ? "selected-nav-section-li-custom" : "nav-section-li-default"}>
            <a href="#sectionContact" className="nav-main-section-a" onClick={(e) => {handleSmoothScroll(e, "sectionContact")}}>Contact</a>
          </li>

          <li className="nav-section-li-default">
            <a 
              href="#sectionAbout" 
              className={["subSectionGeneral", "subSectionEducation", "subSectionTravel"].includes(activeSection) ? "selected-nav-main-section-a-custom" : "nav-main-section-a"} 
              onClick={(e) => {handleSmoothScroll(e, "sectionAbout")}}>
            About</a>
          </li>

          <li className={activeSection === "subSectionGeneral" ? "selected-nav-section-li-custom" : "nav-section-li-default"}>
            <a href="#subSectionGeneral" className="nav-sub-section-a" onClick={(e) => {handleSmoothScroll(e, "subSectionGeneral")}}>General</a>
          </li>
          <li className={activeSection === "subSectionEducation" ? "selected-nav-section-li-custom" : "nav-section-li-default"}>
            <a href="#subSectionEducation" className="nav-sub-section-a" onClick={(e) => {handleSmoothScroll(e, "subSectionEducation")}}>Education</a>
          </li>
          <li className={activeSection === "subSectionTravel" ? "selected-nav-section-li-custom" : "nav-section-li-default"}>
            <a href="#subSectionTravel" className="nav-sub-section-a" onClick={(e) => {handleSmoothScroll(e, "subSectionTravel")}}>Travel</a>
          </li>

          <li className="nav-section-li-default">
            <a 
              href="#sectionProjects" 
              className={["subSectionSpotifyProj", "subSectionRBSProj"].includes(activeSection) ? "selected-nav-main-section-a-custom" : "nav-main-section-a"}
              onClick={(e) => {handleSmoothScroll(e, "sectionProjects")}}>
            Projects</a> 
          </li>

          <li className={activeSection === "subSectionSpotifyProj" ? "selected-nav-section-li-custom" : "nav-section-li-default"}>
            <a href="#subSectionSpotifyProj" className="nav-sub-section-a" onClick={(e) => {handleSmoothScroll(e, "subSectionSpotifyProj")}}>Playlist GPT</a>
          </li>
          <li className={activeSection === "subSectionRBSProj" ? "selected-nav-section-li-custom" : "nav-section-li-default"}>
            <a href="#subSectionRBSProj" className="nav-sub-section-a" onClick={(e) => {handleSmoothScroll(e, "subSectionRBSProj")}}>Reporting Tool</a>
          </li> 
          
        </ul>
      </nav>
    </div>
  );
};

export default SideBarNavigation;