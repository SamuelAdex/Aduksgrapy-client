import React from 'react'

import aduks from '../assets/img/aduks.jpg'
import aduks1 from '../assets/img/aduks1.jpg'
import aduks2 from '../assets/img/aduks2.jpg'
import aduks3 from '../assets/img/aduks3.jpg'
import aduks4 from '../assets/img/aduks4.jpg'
import aduks5 from '../assets/img/aduks5.jpg'
import aduks6 from '../assets/img/aduks6.png'
import aduks7 from '../assets/img/aduks7.png'
import aduks8 from '../assets/img/aduks8.jpg'
import proImg1 from '../assets/lake.jpg'
import proImg from '../assets/slide.jpg'


const Projects = ()=>{
    
    return (
        <div className="flex flex-col items-center justify-center md:mt-[8rem] mb-[8rem]">
            <h1 className="text-center text-5xl mb-10 font-bold">Projects</h1>
            <div className="w-[80%] columns-3xs">
                <img className="mb-5 rounded-lg cursor-pointer" src={aduks} alt="" />
                <img className="mb-5 rounded-lg cursor-pointer" src={aduks1} alt="" />
                <img className="mb-5 rounded-lg cursor-pointer" src={aduks2} alt="" />
                <img className="mb-5 rounded-lg cursor-pointer" src={aduks3} alt="" />
                <img className="mb-5 rounded-lg cursor-pointer" src={aduks4} alt="" />
                <img className="mb-5 rounded-lg cursor-pointer" src={aduks5} alt="" />
                <img className="mb-5 rounded-lg cursor-pointer" src={aduks6} alt="" />
                <img className="mb-5 rounded-lg cursor-pointer" src={aduks7} alt="" />
                <img className="mb-5 rounded-lg cursor-pointer" src={aduks8} alt="" />
                <img className="mb-5 rounded-lg cursor-pointer" src={proImg1} alt="" />
                <img className="mb-5 rounded-lg cursor-pointer" src={proImg} alt="" />
            </div>
        </div>
    )
}


export default Projects