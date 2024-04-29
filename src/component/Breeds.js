import React from 'react'
import "../component/Breeds.css";
import image1 from "../Assets/labrodor.png";
import image2 from "../Assets/Rottweiler.png";
import image3 from "../Assets/Beagle.png";
import image4 from "../Assets/boxer.png";
import image5 from "../Assets/german-shepherd.png";
import image6 from "../Assets/husky.png";
import image7 from "../Assets/poodle.png";
import image8 from "../Assets/shih-tzu.png";
import image9 from "../Assets/spitz.png";
import image10 from "../Assets/golden-rettriwer.png";

import 'react-slideshow-image/dist/styles.css'
import { Slide, Fade,  } from 'react-slideshow-image';




const Breeds = () => {
  
  return (
    
    <div className='Breeds-container'>
      <Fade>
        
        {data.map((d) => (
          <div className='container'>
            <img src={d.image} alt=""/>
            <div className='col-2'>
              <h2>{d.name}</h2>
              <span className='line'></span>
              <p>{d.review}</p>
              <button className='button'>Know more</button>   
            </div>
          </div>
        ))}  
      </Fade>
        
    </div>
    
  )
}

const data = [
  {
    name: 'labrodor',
    image: image1,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'Rottweiler',
    image: image2,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'Beagle',
    image: image3,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'BOXER',
    image: image4,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'ALSATIAN',
    image:image5,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'HUSKY',
    image:image6,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'POODLE',
    image:image7,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'SHIH TZU',
    image:image8,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'SPITZ',
    image:image9,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'GOLDEN RETRIEVER',
    image:image10,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  }
]

export default Breeds; 