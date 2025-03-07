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
    <>
      <div className='written-content-centering-width'>
        <h1 className="text-2xl font-bold pb-2">Travel</h1>
        <p >The time I spent in Greece occupies a special place in my heart. I spent 5 days in both 
        Athens, and the island of Milos among the Cyclades.</p>
      </div>
      <ResponsiveGallery images={greeceImages} title="Greece" />
      <div className='written-content-centering-width'>
        <p className="mb-2">While backpacking across Europe, Eli and I grew quickly fond of Greece as the country was 
        beautiful, the food absolutely astounding, and lifestyle much cheaper in comparison to our time we had just spent in Italy. 
        It was an average of about 38-40 degrees Celsius (~100-104 Fahrenheit) during our stay, so it was important to visit the 
        Acropolis first thing in the morning before the sun reached its peak in the sky. </p>
        <p>On Milos, the "Moonscape" of Sarakiniko Beach felt walking upon another planet. 
        It is truly one of the most beautiful places I will ever see in my entire life. The 20-25mph winds on north side of island 
        made the water quite choppy at Sarakiniko and as a result it was bit unwise to cliff jump into the ocean as we had originally 
        intended. </p>     
      </div>
    </>  
  );
};

// indent-8 md:indent-16
  
export default Travel;