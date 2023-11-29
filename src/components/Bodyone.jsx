import React from "react";
import bgImg from '../assets/Rectangle 3463221.png';

const Bodyone = () => {
    return(
        <div className="w-full my-32 justify-center mt-20">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center">
                    <p className=" py-6
                    text-center text-cyan-400 text-3xl font-bold font-['OPTIVenus'] leading-10 tracking-wide">
                        Trusted by thousands, praised by many</p>  
                </div>

                        <div className="grid md:grid-cols-3 gap-8 px-2 text-center ">
                            <div className=" flex flex-col justify-center md:flex-row w-96 h-50 p-2 bg-black 
                                rounded-2xl border-4 border-cyan-400 items-center
                                 md:min-w-[700px] ml-10">
                                <img className="w-1/2  rounded-lg" src={bgImg} alt="User" />
                                <div className="w-1/2 flex flex-col justify-start items-start ml-4">
                                <p className="text-fuchsia-500 text-base md:text-lg font-medium font-['Graphik'] leading-6">
                                    “I love the privacy features on this Trustchat. It feels really secure and I can trust that my 
                                    conversations are kept private and not monitored by any third parties."
                                </p>
                                <div className="mt-4">
                                    <p className="text-green-600 text-base md:text-lg font-semibold font-['Graphik'] leading-6">
                                    Monkey D. Luffy
                                    </p>
                                    <p className="text-fuchsia-500 text-base md:text-lg font-semibold font-['Graphik'] leading-6">
                                    Chief executive officer, STRAWHAT
                                    </p>
                                </div>
                                </div>
                            </div> 
                        </div>
            </div>
        </div>

    )
}
export default Bodyone;