import React, {useState} from "react";
import { MenuAlt3Icon, XIcon} from "@heroicons/react/outline";
import { Link, 
    //Button, 
    //Element, 
    //Events,
    //animateScroll as scroll, 
    //scrollSpy 
    } from 'react-scroll';
    //import { Link } from 'react-router-dom';



const Navbar =() => {
    const [nav, setNav] =useState(false);
    const handleClick = () =>setNav(!nav);

    const handleClose = () => setNav(!nav);
    return (
        <div className="w-screen h-[80px] z-10 bg-black fixed drop-shadow-lg">
  <div className="px-2 flex justify-between items-center w-full h-full">

    <div className="flex items-center">
    <h1 className="text-fuchsia-500 text-3xl font-extrabold 
    font-['Akira Expanded'] leading-10">Trust</h1>
    <h1 className="text-cyan-400 text-3xl 
    font-extrabold font-['Akira Expanded'] leading-10">Chat</h1>
    </div>
    <div className="hidden md:flex flex-grow justify-end text-white">
                  <ul className="hidden md:flex">
                    <li className="text-cyan-400 text-base font-bold font-['Montserrat'] leading-normal"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className="text-white text-base font-bold font-['Montserrat'] leading-normal"><Link to="test1" smooth={true} offset={50} duration={500}>Memories</Link></li>
                    <li className="text-white text-base font-bold font-['Montserrat'] leading-normal"><Link to="test1" smooth={true} offset={50} duration={500}>Support</Link></li>
                    <li className="text-white text-base font-bold font-['Montserrat'] leading-normal"><Link to="test1" smooth={true} offset={50} duration={500}>Platform</Link></li>
                    <li className="text-white text-base font-bold font-['Montserrat'] leading-normal"><Link to="test1" smooth={true} offset={50} duration={500}>Pricing</Link></li>
                    </ul> 
                </div>
                <div className="hidden md:flex pr-4">
                {/* <button className="w-44 h-14 px-10 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-400 
                rounded-lg justify-center 
                 items-center gap-2.5 inline-flex 
                 text-center text-white text-base font-bold font-['Montserrat'] leading-normal">
                    Get started</button> */}
                    {/* <button className="border-none bg-transparent text-black mr-4">Sign Up</button> */}
                    <button className="px-8 py-1 bg-gradient-to-r from-fuchsia-500 to-cyan-400 font-['Montserrat']">Get started</button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? < MenuAlt3Icon className='w-5 text-white' /> : <XIcon className="w-5 text-red-500"/>}
                </div>

            </div> 
            <ul className={!nav ? "hidden" : "absolute bg-black text-white w-full px-8"}>
                {/* <li className="border-b-2 border-fuchsia-500 2-full"><Link  onClick={handleClose}to="home" smooth={true} duration={500}>Home</Link></li> */}
                <li className="border-b-2 border-fuchsia-500 2-full text-base font-bold font-['Montserrat'] leading-normal"><Link onClick={handleClose}to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="border-b-2 border-fuchsia-500 2-full text-base font-bold font-['Montserrat'] leading-normal"><Link onClick={handleClose}to="home" smooth={true} duration={500}>Memories</Link></li>
                <li className="border-b-2 border-fuchsia-500 2-full text-base font-bold font-['Montserrat'] leading-normal"><Link onClick={handleClose}to="home" smooth={true} duration={500}>Supoort</Link></li>
                <li className="border-b-2 border-fuchsia-500 2-full text-base font-bold font-['Montserrat'] leading-normal"><Link onClick={handleClose}to="home" smooth={true} duration={500}>Platform</Link></li>
                <li className="border-b-2 border-fuchsia-500 2-full text-base font-bold font-['Montserrat'] leading-normal"><Link onClick={handleClose}to="home" smooth={true} duration={500}>Pricing</Link></li>
                
                {/* <li className="border-b-2 border-fuchsia-500 2-full">About</li>
                <li className="border-b-2 border-fuchsia-500 2-full">Support</li>
                <li className="border-b-2 border-fuchsia-500 2-full">Platform</li>
                <li className="border-b-2 border-fuchsia-500 2-full">Pricing</li> */}
                <div className="flex flex-col my-4">
                <button className="px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-400 font-['Montserrat']">Get started</button>
                    {/* <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">SignIn</button> */}
                    {/* <button className="px-8 py-3">Sign Up</button> */}
                </div>
            </ul> 
        </div>
    )
}

export default Navbar;