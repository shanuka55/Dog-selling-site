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
              <p>{d.num}</p> 
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
    review: `Labrador Retrievers are friendly, outgoing, and high-spirited dogs. They are known for their intelligence and obedience, making them excellent family pets and working dogs. Labradors come in three colors: black, yellow, and chocolate.`,
    num: '01/10'
  },
  {
    name: 'Rottweiler',
    image: image2,
    review: `Rottweilers are strong, loyal, and confident dogs. They have a natural protective instinct and are often used as guard dogs and in police work. Despite their imposing appearance, Rottweilers can be affectionate and devoted companions when properly trained and socialized.`,
    num: '02/10'
  },
  {
    name: 'Beagle',
    image: image3,
    review: `Beagles are small to medium-sized hounds known for their keen sense of smell and friendly disposition. They are curious, energetic, and love to explore their surroundings. Beagles are often kept as family pets due to their playful nature and adaptability.`,
    num: '03/10'
  },
  {
    name: 'BOXER',
    image: image4,
    review: `Boxers are medium to large-sized dogs with a muscular build and a distinctive square-shaped head. They are playful, energetic, and known for their boundless enthusiasm. Boxers are great with children and make loyal companions for active families.`,
    num: '04/10'
  },
  {
    name: 'ALSATIAN',
    image:image5,
    review: `German Shepherds, also known as Alsatians in some regions, are intelligent, versatile, and highly trainable dogs. They are often used as working dogs in various roles such as police work, search and rescue, and as service dogs. German Shepherds are loyal, protective, and make excellent family pets with proper training and socialization.`,
    num: '05/10'
  },
  {
    name: 'HUSKY',
    image:image6,
    review: `Huskies are medium-sized dogs known for their striking appearance, including their distinctive wolf-like appearance and striking blue or multi-colored eyes. They are energetic, independent, and have a strong prey drive. Huskies thrive in colder climates and require regular exercise and mental stimulation.`,
    num: '06/10'
  },
  {
    name: 'POODLE',
    image:image7,
    review: `Poodles are highly intelligent and elegant dogs known for their curly, hypoallergenic coats. They come in three sizes: standard, miniature, and toy. Poodles are versatile and excel in various roles, including as family pets, therapy dogs, and in dog sports such as obedience and agility.`,
    num: '07/10'
  },
  {
    name: 'SHIH TZU',
    image:image8,
    review: `Shih Tzus are small dogs with a distinctive long, flowing coat and a friendly, affectionate temperament. They were originally bred as companion dogs for royalty in ancient China. Shih Tzus are playful, outgoing, and thrive on human companionship.`,
    num: '08/10'
  },
  {
    name: 'SPITZ',
    image:image9,
    review: `Spitz breeds, including the American Eskimo Dog, Japanese Spitz, and others, are characterized by their fluffy coats, pointed ears, and curled tails. They are intelligent, alert, and make excellent watchdogs. Spitz dogs are typically energetic and require regular exercise and mental stimulation.`,
    num: '09/10'
  },
  {
    name: 'GOLDEN RETRIEVER',
    image:image10,
    review: `Golden Retrievers are friendly, intelligent, and gentle dogs known for their golden coats and affectionate nature. They are versatile and excel in various roles, including as family pets, therapy dogs, and in search and rescue. Golden Retrievers are eager to please and thrive on positive reinforcement training.`,
    num: '10/10'
  }
]

export default Breeds; 