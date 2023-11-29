import React from 'react';
import {
    //CloudDownloadIcon,
    //DatabaseIcon,
    //PaperAirplaneIcon,
    //ServerIcon
} from '@heroicons/react/solid';
import bgImg from '../assets/Object 1.png'



const Hero = () => {
    return(
        <div name="home" className='w-full h-screen bg-black flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    {/* <p className='text-2xl'>Unique Sequnceing  & Production</p> */}
                    {/* <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1> */}


                    {/* <div className="w-48 h-48 bg-fuchsia-500 rounded-full blur-3xl" /> */}
                    {/* <div className="w-48 h-48 origin-top-left rotate-180 bg-fuchsia-500 rounded-full blur-3xl" /> */}
                    


                    <h1 className="text-fuchsia-500 text-6xl 
                    font-bold font-['OPTIVenus'] 
                    leading-10 tracking-wide mt-8 py-3 md:text-7xl md-4">Connect.</h1>
                    
                    <span className="text-cyan-400 text-6xl 
                    font-bold font-['OPTIVenus'] leading-10 
                    tracking-wide py-2">Chat.<br/></span>

                    <span className="text-white text-6xl font-bold 
                    font-['OPTIVenus'] leading-10 tracking-wide">and Secure</span>
                    <span className="text-white text-6xl font-bold 
                    font-['OPTIVenus'] leading-10 tracking-wide py-2">Your Data.</span>




                    <p className="w-96 text-white text-xl font-medium 
                    font-['Graphik'] leading-loose">Chat with anyone from anywhere in the world, 
                    and leverage our platform designed with your privacy in mind,
                    built to be secure, private and on the blockchain technology.</p>





                    {/* <p className='text-2xl'>This is our Tech brand</p> */}
                    {/* <button className='py-3 px-6 m-4'>Get Started</button> */}


                    <div className='flex flex-col lg:flex-row lg:justify-center'>


                    <button className="w-60 h-14 px-10 py-4 
                    bg-gradient-to-r from-fuchsia-500 to-cyan-400 
                    rounded-lg justify-center items-center gap-2.5 inline-flex
                    text-center text-white text-base font-bold font-['Montserrat']
                    leading-normal lg:mx-4 mb-4 lg:mb-0">Connect with people
                    </button>


                    <button className="w-60 h-14 px-10 py-4 rounded-lg border-2
                     border-fuchsia-500 justify-center items-center gap-2.5 inline-flex
                     text-center text-white text-base font-bold font-['Montserrat'] 
                        leading-normal lg:mx-4
                           hover:bg-cyan-500
                         hover:text-white 
                        transition duration-300 ease-in-out bg-transparent">Chat with friends
                        </button>

  {/* <button className='py-3 px-6 lg:mx-4 mb-4 lg:mb-0'>Get Started</button>
  <button className='py-3 px-6 lg:mx-4'>Get Started</button> */}

</div>





                    {/* <button className="w-64 h-14 px-10 py-4 rounded-lg border-2
                     border-fuchsia-500 justify-center items-center gap-2.5 inline-flex
                     text-center text-white text-base font-bold 
                        font-['Montserrat'] leading-normal">Chat with friends
                        </button> */}






                </div>
                
                <div className='mt-20 ml-20'>
                    <img className='hidden sm:block'
                     src={bgImg} alt="hero01" width={350} height={150} />
                </div>
                
                {/* <div className='absolute flex flex-col py-8 md:min-w-[760px]
                bottom-[5%] mx-1 md:left-1/2 tranform md:-translate-x-1/2
                bg-zinc-200 border border-slate-300
                rounded-xl text-center shadow-xl '>
                    <p>Data Services</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-4'>Icon. App Security</p>
                        <p className='flex px-4 py-4'>Icon. dashboard</p>
                        <p className='flex px-4 py-4'>Icon. Cloud</p>
                        <p className='flex px-4 py-4'>Icon. API</p>
                    </div>
                </div> */}

            </div>

        </div>
    )

}
export default Hero;