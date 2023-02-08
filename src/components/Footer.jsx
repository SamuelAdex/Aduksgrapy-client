import React from 'react'
import { MdOutlineFacebook } from 'react-icons/md'
import {AiFillTwitterCircle, AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
    let year = new Date()
  return (
    <div className="mt-10 bg-black md:flex flex flex-col items-center justify-center pb-8">
        <div className="md:w-[80%] w-full md:p-0 px-6 py-3 md:flex md:justify-between  mt-14">
            <div className="mb-6">
                <h1 className="text-white font-bold text-md">MY CONTACT</h1>
                <div className="text-gray-600 mt-1">Address: Oregun Ikeja, Lagos State Nigeria</div>
                <div className="text-gray-600 mt-1">Phone: +2349058944467</div>
                <div className="text-gray-600 mt-1"></div>
            </div>
            <div className="mb-6">
                <h1 className="text-white font-bold text-md">QUICK LINKS</h1>
                <div className="text-gray-600 mt-1 cursor-pointer hover:text-teal-50">Book A Session</div>
                <div className="text-gray-600 mt-1 cursor-pointer hover:text-teal-50">Join Our Team</div>
                <div className="text-gray-600 mt-1 cursor-pointer hover:text-teal-50">Sponsor Us</div>
            </div>
            <div className="">
                <button className="p-4 rounded-lg bg-yellow-400 font-bold">Buy Me a Coffee</button>
            </div>
        </div>
        <div className="p-[0.4px] mt-8 md:w-[80%] w-full bg-gray-200"></div>
        <div className="md:flex md:justify-between justify-center text-center items-center gap-4 mt-8 md:w-[80%] w-full">            
            <div className="text-white">
                <h1>&copy; Copyright {year.getFullYear()} All rights Reversed.</h1>
            </div>
            <div className="flex gap-3 justify-center mt-4 md:mt-0">
                  <MdOutlineFacebook className="text-white" fontSize="1.8rem" />
                  <AiOutlineInstagram className="text-white" fontSize="1.8rem" />
                  <AiFillTwitterCircle className="text-white" fontSize="1.8rem" />
            </div>
        </div>
    </div>
  )
}

export default Footer