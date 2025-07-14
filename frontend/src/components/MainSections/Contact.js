import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import spotifySVG from '../../assets/iconography/socials/Spotify_logo_without_text_ECFDFE.png';
import githubSVG from '../../assets/iconography/socials/GitHub_Invertocat_ECFDFE.png';
import linkedInPNG from '../../assets/iconography/socials/In-ECFDFE-40.png';
import resume1White from '../../assets/iconography/resume-ECFDFE512.png';


const Contact = () => {
  const [showCopied, setShowCopied] = useState(false);

  const copyAnimation = useSpring({
    from: {
      opacity: 0,
      transform: showCopied ? 'translate(-50%, 0px)' : 'translate(-50%, -25px)',
    },
    to: {
      opacity: showCopied ? 1 : 0,
      transform: showCopied ? 'translate(-50%, -25px)' : 'translate(-50%, -25px)',
    },
    config: {
      tension: 120,
      friction: 14,
      duration: showCopied ? 400 : 300,
    }
  });

  const handleCopyEmail = () => {
    const email = 'charlie.baker777@yahoo.com';
    navigator.clipboard.writeText(email);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 2500);
  };

  return (
    <div className="flex flex-wrap flex-row gap-5 items-center justify-center ">
      <div>
        <h1 className="text-4xl font-bold text-light">Say Hello</h1>
        <p className="">cell: (1) 508-259-1167</p>
        <div className="relative inline-block">
          <p
            onClick={handleCopyEmail}
            className="underline hover:text-vibrant hover:cursor-pointer select-none"
          >
            charlie.baker777@yahoo.com
          </p>
          <animated.div
            style={{
              ...copyAnimation,
              position: 'absolute',
              left: '50%',
              top: '0px',
              zIndex: 50
            }}
            className="bg-background text-vibrant px-2 py-1 rounded-full text-sm select-none"
          >
            Copied.
          </animated.div>
        </div>
        <p className="">home: Boston, MA</p>
      </div>
      <div className='contactBreakpoint:max-w-28 flex flex-row flex-wrap gap-4 items-center justify-center'>
        <a href="https://1drv.ms/b/c/287aef5d7048c2e1/EVGFgYt0rkJDm_gzEJFkv4YBpgMqCupKGtafPKloa0YzTA" target="_blank" rel="noreferrer">
          <img src={resume1White} alt="Resume" className="w-11 h-11" />
        </a>
        <a href="https://open.spotify.com/user/charlie7977" target="_blank" rel="noreferrer">
          <img src={spotifySVG} alt="Spotify" className="w-10 h-10" />
        </a>
        <a href="https://github.com/cjb2272" target="_blank" rel="noreferrer">
          <img src={githubSVG} alt="GitHub" className="w-10 h-10" />
        </a>
        <a href="https://www.linkedin.com/in/charles-baker-914707204" target="_blank" rel="noreferrer">
          <img src={linkedInPNG} alt="LinkedIn" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
};

export default Contact;