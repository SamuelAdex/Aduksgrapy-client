import React from 'react'

import imgFile from '../assets/img/aduks5.jpg'

const About = () => {
    return (
        <div className="flex justify-center mt-28">
            <div className="w-[80%] md:flex justify-center gap-16">
                <img src={imgFile} className="md:w-[70%] w-[100%] md:flex-1 md:h-[100%] rounded-lg" alt="" loading="lazy" />
                <div className="md:flex-1 relative">
                    <div className="bg-white backdrop-blur-lg md:p-4 md:absolute mt-8 md:-left-[10rem]">
                        <h1 className="md:text-4xl text-[1.3rem] text-center md:text-left font-bold">Hi, i'm Aduke Professional Photographer.</h1>
                        {/* <h1 className="md:text-4xl text-[1.8rem] text-center md:text-left font-bold md:mt-4"></h1> */}
                    </div>
                    <p className="md:mt-[10rem] mt-4 md:text-[19px] text-[16px] md:text-left text-center text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis rem hic numquam quidem amet odit nisi in vitae quis, animi ipsam. Neque asperiores repudiandae, et nemo repellat earum placeat atque. animi ipsam. Neque asperiores repudiandae, et nemo repellat earum placeat atque.animi ipsam. Neque asperiores repudiandae, et nemo repellat earum placeat atque.</p>
                    <div className="mt-8 mb-[5rem]">
                        <div className="font-bold text-[16px] flex gap-6 mt-5">
                            <span>/</span> 
                            <span>Award for Best Photographer of the Year 2021</span>
                        </div>
                        <div className="font-bold text-[16px] flex gap-6 mt-5">
                            <span>/</span> 
                            <span>Featured in focus Magazines</span>
                        </div>
                        <div className="font-bold text-[16px] flex gap-6 mt-5">
                            <span>/</span> 
                            <span>Loveworld media Team lead</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About