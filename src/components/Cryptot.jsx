import React from 'react';
//import bgImg from '../assets/Object 1.png'
import BitcoinIcon from '../assets/c/simple-icons_bitcoin.png';
import cryptocurrency_bnb from "../assets/c/cryptocurrency_bnb.png"
import mdi_ethereum from "../assets/c/mdi_ethereum.png";
import simple_icons_tether from "../assets/c/simple-icons_tether.png"
import cryptocurrencyq_bnb from "../assets/c/cryptocurrency_bnb.png";
import cryptocurrencyq_usdc from "../assets/c/cryptocurrency_usdc.png";
import cryptocurrencyq_xrp from "../assets/c/cryptocurrency_xrp.png";
import mingcute_cardano_adaline from "../assets/c/mingcute_cardano-ada-line.png";
import simpleicons_dogecoin from "../assets/c/simple-icons_dogecoin.png";

const Crypto = () => {
    return(
        <div className='w-full  bg-black flex flex-col justify-between'>
             {/* <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'> */}
             <div className='max-w-[1240px] mx-auto'>

                
             <div className='relative flex flex-col justify-center py-8 md:min-w-[760px] bottom-0 mx-auto
                bg-black border border-black
                rounded-xl text-center shadow-xl mt-5'>

                    
                    <div className='flex justify-between flex-wrap px-4'>
                    <img className='flex px-4 py-4 ' src={BitcoinIcon} alt="Bitcoin Icon"  width={70} height={70}/>
                    <img className='flex px-4 py-4 ' src={mdi_ethereum} alt="Bitcoin Icon"  width={70} height={70}/>
                    <img className='flex px-4 py-4 ' src={simple_icons_tether} alt="Bitcoin Icon"  width={70} height={70}/>
                    <img className='flex px-4 py-4 ' src={cryptocurrency_bnb} alt="Bitcoin Icon"  width={70} height={70}/> 
                    <img className='flex px-4 py-4 ' src={cryptocurrencyq_bnb} alt="Bitcoin Icon"  width={70} height={70}/>
                    <img className='flex px-4 py-4 ' src={cryptocurrencyq_usdc} alt="Bitcoin Icon"  width={70} height={70}/>
                    <img className='flex px-4 py-4 ' src={cryptocurrencyq_xrp} alt="Bitcoin Icon"  width={70} height={70}/>
                    <img className='flex px-4 py-4 ' src={mingcute_cardano_adaline} alt="Bitcoin Icon"  width={70} height={70}/>
                    <img className='flex px-4 py-4 ' src={simpleicons_dogecoin} alt="Bitcoin Icon"  width={70} height={70}/>
     
                    </div>
                    </div>
                    </div>
        </div>

    )
}
export default Crypto;