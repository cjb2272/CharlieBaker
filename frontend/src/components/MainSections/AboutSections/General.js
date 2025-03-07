import React from 'react';
import gradFriendsImg from '../../../assets/images/meFatherGrandfather.webp'; //4:3

const General = () => {
    return (
      <>
        <div className='written-content-centering-width'>
          <h1 className="text-2xl font-bold pb-2">General</h1>
          <p>Hello! I am 23 years old, graduated from RIT in Computer Science, and currently 
            seeking a full-time position in Full-Stack Development. I have 11 months of professional Software Dev. under my belt across 2 Co-Ops. 
            Currently I am working at Raising Canes part time while working on personal projects and continuing the search for a full time position. </p>
        </div>
        <div className='mx-auto max-w-xl p-4'>
          <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
            <img src={gradFriendsImg} alt="Myself, Father, and Grandfather on Bench" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className='written-content-centering-width'>
          <p className="mb-2">
          I was raised in Hopkinton, Massachusetts and as a true MA resident, I have always 
          enjoyed watching the Boston Marathon runners kickoff from the center of town since I was a child. 
          </p>
          <p className="mb-2">
          To tell you a little bit about myself: I am an avid concert-goer and music listener, enjoy playing soccer in my free time, and am a lover of nature, travel, and 
          most importantly spending quality time with family and friends. Quiz me on anything Star Wars when we cross paths, or give me a
           book recommendation as I love to read as part of my nightly routine. 
          </p>
          <p>
          Upon college graduation, I backpacked Europe for ~3 months alongside my friend Eli, carrying on a tradition for which my 
          grandfather and father had also done the same after their respective graduations. 
          </p>
        </div>     
      </>
    );
  };
  
  export default General;