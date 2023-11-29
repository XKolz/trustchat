import React from 'react';
import bgWZ from "../assets/16 1.png";
import bgQW from "../assets/d1569053-de87-4b94-82a3-6ad4357bccac 1.png";
import bgAS from "../assets/238fa36a-847e-4911-929d-a7491958a590@3x 1.png";
import bgZX from "../assets/Asset 2 1.png";
import bgJX from "../assets/Jax.png";

const Bodytwo = () => {
    return(
        <div name="home" className='w-full bg-black flex flex-col justify-between'>
            <div className='flex flex-col md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='mt-20 ml-20 flex flex-col md:flex-row items-center justify-center'>
                    <div className='md:w-1/2 md:order-1 text-center md:text-left'>
                        {/* <p className="text-fuchsia-500 text-4xl font-bold font-['OPTIVenus'] leading-10 tracking-wide">User-owned:</p> */}
                        <p className="w-96 text-fuchsia-500 text-4xl font-bold font-['OPTIVenus'] leading-10 tracking-wide">Decentralized:</p>
                        <p className="text-white text-xl font-medium font-['Graphik'] leading-10">Our platform is built on blockchain technology, which means that your data is stored on a distributed network rather than a central server. This makes it virtually impossible for anyone to hack into your conversations or steal your personal information.</p>
                    </div>
                    <div className='md:w-1/2 md:order-2 flex justify-center'>
                        <img className='md:flex-row' src={bgWZ} alt="hero01" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='mt-20 ml-20 flex flex-col md:flex-row items-center justify-center'>
                    <div className='md:w-1/2 md:order-2 text-center md:text-left'>
                        <p className="text-fuchsia-500 text-4xl font-bold font-['OPTIVenus'] leading-10 tracking-wide">User-owned:</p>
                        <p className="text-white text-xl font-medium font-['Graphik'] leading-10">You own your data on our platform, and you have complete control over who you share it with. You can choose to keep your conversations private or share them with others, and you can delete them at any time.</p>
                    </div>
                    <div className='md:w-1/2 md:order-1 flex justify-center'>
                        <img className='md:flex-row' src={bgQW} alt="hero01" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='mt-20 ml-20 flex flex-col md:flex-row items-center justify-center'>
                    <div className='md:w-1/2 md:order-1 text-center md:text-left'>
                        <p className="text-fuchsia-500 text-4xl font-bold font-['OPTIVenus'] leading-10 tracking-wide">Confidential:</p>
                        <p className="text-white text-xl font-medium font-['Graphik'] leading-10">We don't store any of your personal information on our platform, and we don't sell your data to third parties. This means that your conversations are completely private and secure.</p>
                    </div>
                    <div className='md:w-1/2 md:order-2 flex justify-center'>
                        <img className='md:flex-row' src={bgAS} alt="hero01" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='mt-20 ml-20 flex flex-col md:flex-row items-center justify-center'>
                    <div className='md:w-1/2 md:order-2 text-center md:text-left'>
                        <p className="text-fuchsia-500 text-4xl font-bold font-['OPTIVenus'] leading-10 tracking-wide">Easy to use:</p>
                        <p className="text-white text-xl font-medium font-['Graphik'] leading-10">Our platform is user-friendly and easy to navigate, so you can start chatting with others right away. You can join existing chat rooms or create your own, and you can invite others to join you.</p>
                    </div>
                    <div className='md:w-1/2 md:order-1 flex justify-center'>
                        <img className='md:flex-row' src={bgZX} alt="hero01" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='mt-20 ml-20 flex flex-col md:flex-row items-center justify-center'>
                    <div className='md:w-1/2 md:order-1 text-center md:text-left'>
                        <p className="text-fuchsia-500 text-4xl font-bold font-['OPTIVenus'] leading-10 tracking-wide">Fun to chat:</p>
                        <p className="text-white text-xl font-medium font-['Graphik'] leading-10">Our platform is designed to be fun and engaging, with features like emojis, stickers, GIFs, avatars, memes etc. to help you express yourself and enjoy conversations.</p>
                    </div>
                    <div className='md:w-1/2 md:order-2 flex justify-center'>
                        <img className='md:flex-row' src={bgJX} alt="hero01" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bodytwo;