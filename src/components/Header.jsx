import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'


const Header = () =>{
    return (
        <header className="flex justify-center fixed w-full bg-white shadow top-0 z-10">
            <nav className="w-[80%] py-[2rem] flex justify-between items-center">
                <div className="font-bold text-2xl">
                    <h1>AduksGraphy</h1>
                </div>
                <div className="md:flex gap-5 items-center hidden">
                    <a href="#home" className="font-bold hover:text-teal-800 cursor-pointer">Home</a>
                    <a href="#about" className="font-bold hover:text-teal-800 cursor-pointer">About</a>
                    <a href="#projects" className="font-bold hover:text-teal-800 cursor-pointer">Projects</a>
                    <a href="#contact" className="font-bold hover:text-teal-800 cursor-pointer">Contact</a>
                </div>
                <div className="md:hidden cursor-pointer">
                    <AiOutlineMenu fontSize={"1.8rem"} />
                </div>
            </nav>
        </header>
    )
}

export default Header