import React from 'react'

import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Latest from '../components/Latest'
import Projects from '../components/Projects'


const Home = () =>{
    return (
        <div className="">
            <Header />
            <Hero />
            <Slider />
            <About />
            <Projects />
            <Latest />

            <Contact />
            <Footer />
        </div>
    )
}

export default Home