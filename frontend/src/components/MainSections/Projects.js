import RBSProj from "./ProjectSections/RBSProj";
import SpotifyProj from "./ProjectSections/SpotifyProj";

const Projects = ({sectionRefs}) => {
    return (
      <div className="flex flex-col items-center justify-center space-y-8 ">
        <SpotifyProj sectionRefs={sectionRefs}/>
        <RBSProj sectionRefs={sectionRefs}/>
      </div>
    );
  };
  
  export default Projects;