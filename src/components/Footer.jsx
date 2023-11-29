import React from "react";
import soQw from "../assets/Socials/akar-icons_telegram-fill.png"
import soAS from "../assets/Socials/ant-design_twitter-square-filled (1).png"
import soZX from "../assets/Socials/skill-icons_discord (1).png";

// import{
//     FaFacebook
// } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
            <div className="max-x-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2  border-fuchsia-500 py-8">





                <div className="col-span-2 pt-8 md:pt-2 py-2 px-2">
                    {/* <h1 className="font-bold uppercase">Stay updated</h1> */}
                    <div className="flex items-center">
                    <h1 className="text-fuchsia-500 text-2xl
                     font-extrabold font-['Akira Expanded'] leading-loose">Trust</h1>
                     <h1 className="text-cyan-400 text-2xl font-extrabold
                      font-['Akira Expanded'] leading-loose">Chat</h1>
                      </div>

                      <p className=" text-white text-xl 
                      font-medium font-['Graphik'] leading-loose
                        py-4
                      ">The premier platform 
                      designed for everyone built on blockchain technology, 
                      which ensures secured and private messaging. </p>

                    {/* <p className="font-bold uppercase py-4">Subscribe to get the latest information on upcoming events</p> */}
                </div>

           

                <div>
                <h6 className="text-cyan-400 text-xl
                 font-medium font-['Graphik'] leading-loose ml-3">Resources</h6>
                    {/* <h6 className="font-bold uppercase pt-2">Solutions</h6> */}
                    <ul>
                    <li className="text-white text-base font-bold font-['Montserrat'] leading-normal">Memories</li>
                    <li className="text-white text-base font-bold font-['Montserrat'] leading-normal">Community</li>
                    <li className="text-white text-base font-bold font-['Montserrat'] leading-normal">About Us</li>
                        {/* <li className="py-1">Marketing</li> */}
                    </ul>
                </div>
                <div>
                <h6 className="text-cyan-400 text-xl
                 font-medium font-['Graphik'] leading-loose ml-3">Legal</h6>
                    {/* <h6 className="font-bold uppercase pt-2">Pricing</h6> */}
                    <ul>
                    <li className="text-white text-base font-bold font-['Montserrat'] leading-normal">Memories</li>
                    <li className="text-white text-base font-bold font-['Montserrat'] leading-normal">Memories</li>
                    <li className="text-white text-base font-bold font-['Montserrat'] leading-normal">Memories</li>
                        
                      
                        {/* <li className="py-1">Marketing</li> */}
                    </ul>
                </div>
                <div className="">
                <h6 className="text-cyan-400 text-xl
                 font-medium font-['Graphik'] leading-loose ml-3">Connect</h6>
                    <div className="
                    flex flex-row gap-2 items-center pt-2 text-2xl">
                          <img className='flex px-4 py-4 ' src={soZX} alt="Bitcoin Icon"  width={55} height={50}/>
                          <img className='flex px-4 py-4 ' src={soAS} alt="Bitcoin Icon"  width={55} height={50}/>
                          <img className='flex px-4 py-4 ' src={soQw} alt="Bitcoin Icon"  width={55} height={50}/>
     
                        {/* <FaFacebook />
                        <FaFacebook />
                        <FaFacebook /> */}
                    </div>
                    {/* <ul>
                        <li className="py-1"><FaFacebook /></li>
                        <li className="py-1"><FaFacebook /></li>
                        <li className="py-1"><FaFacebook /></li>
                    </ul> */}
                </div>
                
                </div>

                <div className="flex flex-col
                 max-w-[1240px] px-2 py-4 mx-auto 
                 justify-between sm:flex-row text-center text-white">
                    {/* <p className="py-4">2023 Workflo</p> */}

                    <p className="text-white 
                    text-sm font-medium 
                    font-['Graphik'] leading-snug py-4">© TrustChat 2022,  All Rights Reserved 
                    </p>
                    {/* <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                        <FaFacebook />
                        <FaFacebook />
                        <FaFacebook />
                    </div> */}
                </div>
                
            

        </div>
    )
}
export default Footer;