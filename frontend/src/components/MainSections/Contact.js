import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import spotifySVG from '../../assets/iconography/socials/Spotify_logo_without_text_black.svg';
import xTwitterSVG from '../../assets/iconography/socials/X_logo_2023.svg';
import linkedInPNG from '../../assets/iconography/socials/In-White-40.png';
import resume1White from '../../assets/iconography/resume-white512.png';
//import resume2White from '../../assets/iconography/resume2-white512.png';


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
        {/* <p className="">personal: charlie.baker777@yahoo.com</p> */}
        <p className="">home: Boston, MA</p>
        {/*
          <p className="p-tag-default">life: I'm currently living in Brighton, MA. Find me out 
            at ______, ______, or _________</p> 
          */}
        {/* in  my room listening to vinyl ... */}
      </div>
      <div className='contactBreakpoint:max-w-28 flex flex-row flex-wrap gap-4 items-center justify-center'>
        <a href="https://1drv.ms/b/c/287aef5d7048c2e1/EVGFgYt0rkJDm_gzEJFkv4YBpgMqCupKGtafPKloa0YzTA?e=DRDeec" target="_blank" rel="noreferrer">
          <img src={resume1White} alt="Resume" className="w-11 h-11" />
        </a>
        <a href="https://open.spotify.com/user/charlie7977" target="_blank" rel="noreferrer">
          <img src={spotifySVG} alt="Spotify" className="w-10 h-10" />
        </a>
        <a href="https://twitter.com/charles_ba82391" target="_blank" rel="noreferrer">
          <img src={xTwitterSVG} alt="Twitter" className="w-10 h-10" />
        </a>
        <a href="https://www.linkedin.com/in/charles-baker-914707204" target="_blank" rel="noreferrer">
          <img src={linkedInPNG} alt="LinkedIn" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
};

export default Contact;