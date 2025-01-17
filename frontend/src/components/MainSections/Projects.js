import RBSProj from "./ProjectSections/RBSProj";
import SpotifyProj from "./ProjectSections/SpotifyProj";

const Projects = () => {
    return (
      <section id="sectionProjects" className="flex flex-col items-center justify-center space-y-8 ">
        <h1 className="text-4xl font-bold text-light">My Projects</h1>
        <p className="p-tag-default">Extremely dope chronic eye drops in the basement with psychedellic nugs. Crystalized
           buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. OG grandaddy purps with notes 
           of diesel. Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart. Toke up on the Pineapple 
           Express with that sticky icky shotgun sensamillia.</p>
        
        <SpotifyProj/>
        <RBSProj/>
      </section>
    );
  };
  
  export default Projects;