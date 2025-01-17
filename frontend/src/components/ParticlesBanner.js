import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { MoveDirection, OutMode } from "@tsparticles/engine";


const ParticlesBackground = ({ children }) => {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    console.log("ParticlesBackground Effect running post render..."); // ENSURE this runs only once per application lifetime
  
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      
      await loadFull(engine); // loads the tsparticles package bundle, change bundle size accordingly
      //in order: loadAll(), loadFull(), loadSlim(), loadBasic(), ....
      
    }).then(() => {  //.then() is a promise that runs after the async function is complete
      setIsInit(true);
    });
    // no cleanup specified, if we are init an engine shouldnt we kill it
  }, []); // runs once on inital component Mount | isInit is reactive though, shouldn't Linter flag this?

  // function that takes one param 'container' and logs it to the console
  const particlesLoaded = (container) => {
    console.log("particles loaded: ", container);
  };

  if (isInit) {
    console.log("ParticlesBackground is being rendered (B) ...");
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={starsOptions}  //starsOptions particlesOptions
        />
        <div className="particle-banner-content">{children}</div>
      </>
    );
  }

  console.log("ParticlesBackground is being rendered (A) ...");
  return <></>;
};

const starsOptions = {
  background: {
    color: "#000",
  },
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: {
        value: 100,
    },
    move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
            default: OutMode.out,
        },
        random: true,
        speed: 0.1,
        straight: false,
    },
    opacity: {
        animation: {
            enable: true,
            speed: 1,
            sync: false,
        },
        value: { min: 0, max: 1 },
    },
    size: {
        value: { min: 1, max: 3 },
    },
  },
};

export default ParticlesBackground;
