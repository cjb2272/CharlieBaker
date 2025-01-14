//import React, { useCallback } from "react";
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
//import { loadSlim } from "tsparticles";

const ParticlesBackground = ({ children }) => {
  const [init, setInit] = useState(false);

  //const particlesInit = useCallback(async (engine) => {
  //  await loadFull(engine); // Load all features of tsParticles TODO CHANGE THIS AS FULL ISN'T NEEDED
  //}, []);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      //await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#ff66ff",
        },
      },
      fullScreen: { enable: true, zIndex: -1 }, // Ensures particles are in the background WE ARENT SEEING SHIT, WHEN WE REMOVE WE COVER WHOLE SITE
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
        />
        <div className="particle-banner-content">{children}</div>
      </>
    );
  }

  return <></>;

  //return (
  //  <>
  //    <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
  //    <div className="particle-banner-content">{children}</div>
  //  </>
  //);
};

export default ParticlesBackground;
