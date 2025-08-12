import React from 'react';
import gradFriendsImg from '../../../assets/images/meFatherGrandfather.webp'; //4:3

const General = () => {
  return (
    <>
      <div className='written-content-centering-width'>
        <h1 className="text-2xl font-bold pb-2">General</h1>
        <p>Hello! I am 24 years old, graduated from RIT in Computer Science, and a proud member of the Loss Prevention Team at TJX. 
          Prior to joining TJX in August as a Systems Analyst, I participated in two exciting software development Co-Ops.
        </p>
      </div>
      <div className='mx-auto max-w-xl p-4'>
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img src={gradFriendsImg} alt="Myself, Father, and Grandfather on Bench" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className='written-content-centering-width'>
        <p className="mb-2">
          I was raised in Hopkinton, Massachusetts (the start of the Boston Marathon) and have enjoyed watching 
          the Boston Marathon runners kick off from the center of town ever since I was a child.
        </p>
        <p className="mb-2">
          To tell you a little bit about myself: I am an avid concert-goer and music listener, enjoy playing soccer in my free time, and am a lover of nature, travel, and
          most importantly spending quality time with family and friends. Quiz me on anything Star Wars when we cross paths, or give me a
          book recommendation as I love to read as part of my nightly routine.
        </p>
        <p>
          Upon college graduation, I backpacked Europe for ~3 months alongside my friend Eli, carrying on a tradition that my
          grandfather and father also carried out after their respective graduations.
        </p>
      </div>
    </>
  );
};

export default General;