
import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import About from '../component/About'
import Breeds from '../component/Breeds'
import Find from '../component/Find'
import Footer from '../component/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Breeds/>
        <Find/>
        <Footer/>
        
    </div>
  )
}

export default Home