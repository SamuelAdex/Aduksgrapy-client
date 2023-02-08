import React from 'react'
import { Zoom } from "react-awesome-reveal";


const Hero = () => {
    return (
        <div className="flex justify-center pt-[10rem]" id="home">
            <div className="md:w-[80%] w-[100%] grid place-items-center">
                <p className="md:py-2 md:px-10 p-5 cursor-pointer border-2 text-center  border-gray-800 rounded-2xl font-bold">Exceptional Photos everytime.</p>
                <Zoom className="font-bold md:text-[4rem] text-[2rem] w-[70%] text-center mt-3">Capture every precious moment with us</Zoom>
                <p className="mt-2 text-center text-gray-500 md:text-[25px] text-[18px] w-[60%]">Get expert Photographers and amazing photos, affordable and reliable photoshoot depending on your budget.</p>
                <a target="_blank" href="https://wa.me/+2348120360274" className="py-3 md:mt-3 mt-4 font-bold px-6 bg-[#000] rounded-lg text-white">Book photoshoot now</a>
            </div>
        </div>
    )
}

export default Hero