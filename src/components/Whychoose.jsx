import React from "react";
import Whychoseus from "../assets/Rectangle 3463218.png"

const Whychooseus = () => {
    return (
        <div className="w-full h-screen mt-24 mb-24">
            <div className="w-full h-[700px] absolute">
                <img  className="w-full h-full" src={Whychoseus} alt="/" />
            </div>
            <div className="max-w-[1240] mx-auto text-white relative">
                <div className="px-4 py-12">
                {/* <h2 className="pt-8 text-5xl 
                font-bold py-6 uppercase text-center">Why choose US</h2> */}

                <h2 className=" text-center
                 text-white text-4xl font-bold font-['OPTIVenus']
                 leading-10 py-6 pt-8">Why choose TrustChat?</h2>



                <p className="text-center text-white text-2xl
                      font-medium font-['Graphik'] leading-loose py-4">We believe that privacy is a fundamental 
                    right, and we take this belief seriously. 
                    That's why we have built our platform to be secure and private,
                     with your information protected at every step.</p>
                     <p className="text-center text-white text-2xl
                      font-medium font-['Graphik'] leading-loose py-4">
                        With our end-to-end encryption
                       and blockchain technology, you can
                      trust that your conversations are safe from prying eyes
                      </p>
                     </div>
            </div>

        </div>
    )
}
export default Whychooseus;