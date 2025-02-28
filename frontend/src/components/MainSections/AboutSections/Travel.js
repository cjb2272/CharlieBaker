import React from 'react';
import ResponsiveGallery from '../ResponsiveGallery';
// IMAGE IMPORTS
import greeceImage1 from '../../../assets/images/greece/20240713_162235775_iOS_6_11zon.webp';
import greeceImage2 from '../../../assets/images/greece/20240719_152101890_iOS_20_11zon.webp';
import greeceImage3 from '../../../assets/images/greece/20240712_173003495_iOS_3_11zon.webp';
import greeceImage4 from '../../../assets/images/greece/20240713_162112972_iOS_4_11zon.webp';
import greeceImage5 from '../../../assets/images/greece/20240713_162151113_iOS_5_11zon.webp';
import greeceImage6 from '../../../assets/images/greece/20240713_150455241_iOS_1_11zon.webp';
import greeceImage7 from '../../../assets/images/greece/20240713_162957647_iOS_7_11zon.webp';
import greeceImage8 from '../../../assets/images/greece/20240715_172104036_iOS_8_11zon.webp';
import greeceImage9 from '../../../assets/images/greece/20240716_122958363_iOS_9_11zon.webp';
import greeceImage10 from '../../../assets/images/greece/20240716_133243517_iOS_10_11zon.webp';
import greeceImage11 from '../../../assets/images/greece/20240716_133345848_iOS_11_11zon.webp';
import greeceImage12 from '../../../assets/images/greece/20240716_135546916_iOS_12_11zon.webp';
import greeceImage13 from '../../../assets/images/greece/20240716_143747754_iOS_13_11zon.webp';
import greeceImage14 from '../../../assets/images/greece/20240716_150227123_iOS_14_11zon.webp';
import greeceImage15 from '../../../assets/images/greece/20240717_122238512_iOS_15_11zon.webp';
import greeceImage16 from '../../../assets/images/greece/20240718_113456343_iOS_16_11zon.webp';
import greeceImage17 from '../../../assets/images/greece/20240718_145642057_iOS_17_11zon.webp';
import greeceImage18 from '../../../assets/images/greece/20240718_172351653_iOS_18_11zon.webp';
import greeceImage19 from '../../../assets/images/greece/20240718_174137330_iOS_19_11zon.webp';
import greeceImage20 from '../../../assets/images/greece/20240713_155959406_iOS_2_11zon.webp';
import greeceImage21 from '../../../assets/images/greece/20240711_142819093_iOS_1_11zon.webp';
import greeceImage22 from '../../../assets/images/greece/20240712_162656285_iOS_2_11zon.webp';
import greeceImage23 from '../../../assets/images/greece/20240713_161059912_iOS_3_11zon.webp';
import greeceImage24 from '../../../assets/images/greece/20240712_182523423_iOS_4_11zon.webp';
import greeceImage25 from '../../../assets/images/greece/20240713_134452424_iOS_5_11zon.webp';
import greeceImage26 from '../../../assets/images/greece/20240719_163307401_iOS_6_11zon.webp';
import greeceImage27 from '../../../assets/images/greece/20240719_170853277_iOS_7_11zon.webp';
import greeceImage28 from '../../../assets/images/greece/20240719_171321330_iOS_8_11zon.webp';
import greeceImage29 from '../../../assets/images/greece/20240719_173735126_iOS_9_11zon.webp';
import greeceImage30 from '../../../assets/images/greece/20240720_085539258_iOS_10_11zon.webp';

const Travel = () => {
  const greeceImages = [greeceImage1, greeceImage2, greeceImage3, greeceImage4, greeceImage5, 
    greeceImage6, greeceImage7, greeceImage8, greeceImage9, greeceImage10, greeceImage11, 
    greeceImage12, greeceImage13, greeceImage14, greeceImage15, greeceImage16, greeceImage17, 
    greeceImage18, greeceImage19, greeceImage20, greeceImage21, greeceImage22, greeceImage23,
    greeceImage24, greeceImage25, greeceImage26, greeceImage27, greeceImage28, greeceImage29,
    greeceImage30];

  return (
    <section id="subSectionTravel" className="">
      <h1 className="text-2xl font-bold pb-2 written-content-centering-width">Travel</h1>
      <p className="written-content-centering-width">The time I spent in Greece occupies a special place in my heart. I spent 5 days in both Athens, and the island of Milos among the Cyclades.</p>
      <ResponsiveGallery images={greeceImages} title="Greece" />
      <p className="written-content-centering-width">California kush roll it up into a fat blunt for medicinal purposes to elevate your
           consciousness. Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons. Just give
            us the whizzaa! Rolling down the street smoking endo, laid back. Guatemalan purple haze grown outdoors by 
            ganja shaman.</p>
      <p className="written-content-centering-width">Wake and bake indica hash at the dispensary in Oregon decriminalized. Dude you&apos;re
           just being paranoid, don&apos;t call the cops. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the
            side. An ancient plant referenced biblically as the Holy Herb and gets your noggin&apos; rocked. Oh my gawd, 
            they like totally know I&apos;m high.</p>
      <p className="written-content-centering-width">Have you ever tried Lorem Ipsum on Weeeeeeeeeeed? OG grandaddy purps with notes
           of diesel. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Fully man, keif 
           gummies are the indoor equivalent of body high super mellow. Hydroponic nacho pop-tarts tetrahydrocannabinol
            hybrid schwag stems and seeds little orange hairs.</p>

    </section>
  );
};
  
export default Travel;