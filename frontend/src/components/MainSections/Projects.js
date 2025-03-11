import RBSProj from "./ProjectSections/RBSProj";
import SpotifyProj from "./ProjectSections/SpotifyProj";

const Projects = ({sectionRefs}) => {
    return (
      <div className="flex flex-col items-center justify-center space-y-8 ">
        <section id="subSectionSpotifyProj" ref={(el) => (sectionRefs.current[4] = el)}>
          <SpotifyProj/>
        </section>
        <section id="subSectionRBSProj" ref={(el) => (sectionRefs.current[5] = el)}>
          <RBSProj/>
        </section>
      </div>
    );
  };
  
  export default Projects;