
import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import About from '../component/About'
import Breeds from '../component/Breeds'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Breeds/>
        
    </div>
  )
}

export default Home