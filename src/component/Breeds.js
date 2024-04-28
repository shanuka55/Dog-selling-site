import React from 'react'
import "../component/Breeds.css";



const Breeds = () => {
  return (
    <div className='Breeds-container'>
      <div className='container'>

        {data.map((d) => (
          <div>
            <img src={d.img} alt=""/>
            <div className='col-2'>
                <h2>{d.name}</h2>
                <span className='line'></span>
                <p>{d.review}</p>
                <button className='button'>Know more</button>
            </div>
          </div>
        ))}     
      </div>
    </div>
  )
}

const data = [
  {
    name: 'labrodor',
    img: `../Assets/labrodor.png`,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'Rottweiler',
    img: `../Assets/Rottweiler.png`,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'Beagle',
    img: `../Assets/Beagle.png`,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  },
  {
    name: 'Beagle',
    img: `../Assets/Beagle.png`,
    review: `Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.`
  }
]

export default Breeds 