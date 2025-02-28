import React from 'react';
import campusRITImg from '../../../assets/images/RITDroneImageOfGlobalVillage.webp'; //3:2
import gradFriendsImg from '../../../assets/images/gradCharlieTrayAndrew.webp'; //3:4

const Education = () => {
    return (
      <section id="subSectionEducation" className="">
        <h1 className="text-2xl font-bold pb-2 written-content-centering-width">Education</h1>
        <p className="written-content-centering-width"> My 5 years at RIT were truly a blessing. 
          I am grateful to have built countless lifelong relationships, including the family I joined with Theta Psi of Pi Kappa Phi. I jumped into the Computer Science bachelor's
		program with minimal programming experience and fell in love after the first few weeks upon how rewarding it felt to solve my first python problems in CS1.
        </p>
        <div className="container max-w-4xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-3/5">
            <div className="mb-6">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img src={campusRITImg} alt="RIT Global Village Aerial View" className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="prose max-w-none">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
              Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
              rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna 
              non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut 
              dapibus. Mauris iaculis porttitor posuere.
              </p>
              <p>
              Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. 
              Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse 
              dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 mt-6 md:mt-0 md:flex md:items-center">
            <div className="w-full">
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
                <img src={gradFriendsImg} alt="Graduation with Friends" className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        <p className="written-content-centering-width">Pass the duchie Bob Marley this shatter is hella potent. The cannabis industry will 
          gravity bong a cotton mouth pizza dipped in ranch. Make a quick pipe out of an apple and release the carb Purple
           Haze all around. Rolling down the street smoking endo, laid back. Broccoli bong butterfly gateway drugs to elevate
            your good vibrations.</p>
        <p className="written-content-centering-width">Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little
           orange hairs. Optimizing dime bags of pre-rolled honey oil dabs. Oh my gawd, they like totally know I&apos;m high.
            Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Crystalized buds from trimming tasty
             weed pens THC sativa euphoric resinated dome piece.</p>
      </section>
    );
  };
  
  export default Education;