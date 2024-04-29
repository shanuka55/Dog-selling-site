import React from 'react'
import '../component/Find.css';
import { FcFilledFilter } from "react-icons/fc";

const Find = () => {
  return (
    <div className='Find-dogs'>
        <div className='container'>
            <h2>Find Your New Friend</h2>
            <span className='line'></span>   
        </div>
        <div className='select-container'>
            <select id="mounth" className='select-section'>
                    <option value="hide"> Breed </option>
                    <option value="labrodor">labrodor</option>
                    <option value="Rottweiler">Rottweiler</option>
                    <option value="Beagle">Beagle</option>
                    <option value="boxer">boxer</option>
                    <option value="german-shepherd">german-shepherd</option>
                    <option value="husky">husky</option>
                    <option value="poodle">poodle</option>
                    <option value="shih-tzu">shih-tzu</option>
                    <option value="spitz">spitz</option>
                    <option value="golden-rettriwer">golden-rettriwer</option>
                
            </select> 
            <select id="age" className='select-section'>
                    <option value="hide"> Age </option>
                    <option value="1-6 Month">1-6 Month</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Year">2 Year</option>
            </select> 

            <select id="gender" className='select-section'>
                    <option value="hide"> Gender </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
            </select>

            <button className='filter-btn'>Filter<FcFilledFilter /></button> 
        </div>
        
    </div>
  )
}

export default Find