import React from 'react'
import "../component/Breeds.css";
import labrodor from '../Assets/labrodor.png';

const Breeds = () => {
  return (
    <div className='Breeds-container'>
      <div className='container'>
                <img src={labrodor} alt='john' />
                <div className='col-2'>
                    <h2>LABRODOR</h2>
                    <span className='line'></span>
                    <p>Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
                    <button className='button'>Know more</button>
                </div>
            </div>
    </div>
  )
}

export default Breeds