import React from 'react'

import imgFile from '../assets/img/aduks2.jpg'

const Latest = () => {
  return (
    <div className="flex flex-col items-center md:mb-[5rem]">
        <h1 className="text-5xl font-bold mb-6 text-center">Latest</h1>
        <div className="w-[80%] md:flex items-center justify-center">
            <div className="md:flex-1 relative">
                <img src={imgFile} className="md:w-[80%] md:h-[70%] w-full h-[50%] rounded-lg" alt="" loading="lazy" />
                <div className="absolute z-6 bg-white w-[70%] hidden lg:flex md:flex ml-20 p-5 -mt-20">
                    <div className="">
                        <h1 className="text-lg font-bold">Jack & Rose Pre-Wedding</h1>
                        <p className="text-md text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates ipsam itaque amet natus. Quod perferendis n</p>
                        <a className="text-sm font-bold underline text-teal-500">LEARN MORE</a>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 grid mt-8 md:mt-0 place-items-center">
                <div className="">
                    <h1 className="md:text-4xl text-3xl font-bold">All Latest Professional Work</h1>
                    <p className="mt-5 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, architecto. Ut, ipsa dolore, explicabo eveniet nulla sunt nemo deleniti odio veniam eaque quasi tenetur dolorum aperiam totam, eum consequatur esse!</p>
                    <button className="p-4 mt-5 bg-black text-white font-bold rounded-lg">Explore all Project</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latest