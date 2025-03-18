import React from 'react';
import campusRITImg from '../../../assets/images/RITDroneImageOfGlobalVillage.webp'; //3:2
import gradFriendsImg from '../../../assets/images/gradCharlieTrayAndrew.webp'; //3:4

const Education = () => {
  return (
    <>
      <div className='written-content-centering-width'>
        <h1 className="text-2xl font-bold pb-2">Education</h1>
        <p > My 5 years at RIT were truly a blessing.
          I am grateful to have built countless lifelong relationships, including the family I joined with Theta Psi of Pi Kappa Phi. I jumped into the Computer Science
          bachelor&apos;s program with minimal programming experience and fell in love after the first few weeks upon how rewarding it felt to solve my first python problems in CS1.
        </p>
      </div>
      <div className="max-w-4xl px-4 pt-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/5">
            <div className="mb-6 aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img src={campusRITImg} alt="RIT Global Village Aerial View" className="w-full h-full object-cover" />
            </div>
            <p className='written-content-centering-width mb-2'>
              Like many of the degree programs at RIT, the CS bachelors required ~1 year of Co-Op. My first Co-Op was with Priority Thinking LLC, and my second was with Retail Business Services of ADUSA.
              I am grateful to have had both these wonderful professional experiences throughout the course of my degree at RIT, allowing me to see my
              love for Computer Science translate from schoolwork and projects to a professional environment.
            </p>
            <p className='written-content-centering-width'>
              These two periods allowed me to learn a great deal about the values, leadership, and culture I desire amongst both team and company in the workplace.
            </p>
          </div>
          <div className="md:w-2/5">
            <div className="mb-6 aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <img src={gradFriendsImg} alt="Graduation with Friends" className="w-full h-full object-cover" />
            </div>
            <p className='written-content-centering-width'>
              On the topic of leadership: within Theta Psi at RIT, I served as our Chaplain and aid to the chaplain for 7 semesters.
              My time in this position allowed me to greatly enhance my communication and delegation skills, as well as facilitate
              heavy discussions and foster environments for relationships to grow.
            </p>
            {/* <p>  !!! YOU HAVE FOUND BONUS TEXT !!!
              The Chaplain oversees both the Brotherhood and Living the Ritual committees of the chapter in their operation to perform 
              successful brotherhood and ritual events. In short, Living the Ritual is for teaching and practicing shared values and 
              self-leadership, whereas the Brotherhood counterpart is for having fun and strengthening relationships. 
              </p>
              <p>
              However with proper delegation to chairs and committees, from a larger scope the Chaplain's responsibility is to be the
               overarching figure who is constantly mindful of the state of the chapter as a whole; The state of brotherhood amongst
                the chapter and its individuals, in pair with the overall well being of each and every brother.
              </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;