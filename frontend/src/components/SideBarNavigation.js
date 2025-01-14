import React from 'react';

const SideBarNavigation = () => {
  return (
    <div className="h-screen w-48 fixed bg-background border-r-2 border-tertiary">
      <nav className="h-full flex flex-col justify-center items-center space-y-16 text-light font-medium">
        <a href="#sectionContact" className="hover:text-vibrant">Contact</a>
        <a href="#sectionAbout" className="hover:text-vibrant">About</a>
        <a href="#sectionProjects" className="hover:text-vibrant">Projects</a>
      </nav>
    </div>
  );
};

export default SideBarNavigation;