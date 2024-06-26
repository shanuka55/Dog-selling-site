import React from 'react'
import "../component/About.css";
import dog from '../Assets/8.png'
const About = () => {
  window.addEventListener('scroll', reveal);

  function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++){

      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }else{
        reveals[i].classList.remove('active');
      }
    }
  }
  return (
    <div className='about' id='about'>
            <div className='container'>
                <img src={dog} alt='john'className='reveal' />
                <div className='col-2 reveal'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Welcome to Dogs Store, your premier destination for finding the perfect canine companion to enrich your life. At Dogs Store, we're passionate about connecting loving homes with happy, healthy dogs, and we're dedicated to providing exceptional service every step of the way.</p>
                    <p>Founded by Shanuka with a deep love for dogs,Dogs store was born out of a desire to make the process of finding and bringing home a new furry friend as joyful and rewarding as possible.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
  )
}

export default About