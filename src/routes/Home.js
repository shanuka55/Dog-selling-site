
import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import About from '../component/About'
import Breeds from '../component/Breeds'
import Find from '../component/Find'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Breeds/>
        <Find/>
        
    </div>
  )
}

export default Home