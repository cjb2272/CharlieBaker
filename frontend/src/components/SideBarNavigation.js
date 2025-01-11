import React from 'react';

const SideBarNavigation = () => {
  return (
    <div className="h-screen w-48 fixed bg-lime-50 border-r-2  border-lime-200">
      <nav className="h-full flex flex-col justify-center items-center space-y-16 text-lime-900 font-medium">
        <a href="#sectionContact" className="hover:text-lime-600">Contact</a>
        <a href="#sectionAbout" className="hover:text-lime-600">About</a>
        <a href="#sectionProjects" className="hover:text-lime-600">Projects</a>
      </nav>
    </div>
  );
};

export default SideBarNavigation;