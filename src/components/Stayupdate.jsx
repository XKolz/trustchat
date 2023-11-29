import React from "react";

const StayFocus = () => {
    return (
        <div className="w-full">
<div className="col-span-2 pt-8 md:pt-2 py-y px-2">
    {/* <h1 className="font-bold uppercase">Stay updated</h1> */}


    





    <div className="w-full px-10 py-20 bg-neutral-950 rounded-2xl border-2 border-fuchsia-500 flex-col justify-start 
    items-center gap-10 inline-flex mt-20">
  <div className="flex-col justify-start items-start gap-4 flex">
    <h1 className="w-full text-center
     text-cyan-400 text-4xl font-bold font-['OPTIVenus']
      leading-10">Stay updated</h1>
    <h2 className="w-full text-center
     text-white text-xl font-medium font-['Graphik']
      leading-loose">Subscribe to get latest information
       on upcoming v 2.0 pre-launch fair.</h2>
  </div>
  <div className="self-stretch h-44 flex-col justify-start items-start gap-10 flex">
    <div className="self-stretch justify-start items-start gap-10 inline-flex">
      
      <div className="grow shrink basis-0 flex-col justify-start
       items-start gap-2 inline-flex">

<form className="w-full gap-2 flex flex-col sm:flex-row items-center">
           <div class=" w-full xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
            <label class="xl:inline-block 2xl:inline-block lg:inline-block 
            md:block sm:block mb-2 md:mb-0 sm:mb-0 
            lg:mb-0 xl:mr-4 2xl:mr-4 text-white
             text-base font-bold font-['Graphik'] leading-normal" for="name">Name</label>
            <input class="w-full p-2 rounded-md md:4
            mr-2 sm:mr-4 mb-2 sm:mb-0 md-4
         bg-neutral-700 text-neutral-500 border-blue-500
         text-base
          font-medium
           font-['Graphik'] leading-normal" type="name" id="name" 
           placeholder="Full Name"/>
            </div>
            <div class=" w-full xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
            <label class="xl:inline-block 2xl:inline-block lg:inline-block 
            md:block sm:block mb-2 md:mb-0 sm:mb-0 
            lg:mb-0 xl:mr-4 2xl:mr-4 text-white
             text-base font-bold font-['Graphik'] leading-normal" for="email">Email</label>
            <input class="w-full p-2 rounded-md md:4
            mr-2 sm:mr-4 mb-2 sm:mb-0 md-4 bg-neutral-700
             text-neutral-500 border-blue-500 text-base font-medium
           font-['Graphik'] leading-normal
            " type="email" id="email" placeholder="Email"/>
            </div>
            </form>
        
      </div>
    </div>


    <button className="self-stretch px-10 py-4 bg-gradient-to-r
     from-fuchsia-500 to-cyan-400 rounded-lg justify-center
      items-center gap-2.5 inline-flex text-center text-white
       text-base font-bold font-['Montserrat']
        leading-normal
        p-2 mb-2 sm:mb-0 sm:px-8
        
        ">Subscribe
    </button>
  </div>
</div>

    {/* <p className="font-bold uppercase py-4 text-white mt-20">Subscribe to get the latest information on upcoming events</p> */}
    {/* <form className="flex flex-col sm:flex-row items-center"> */}
        {/* <input className="w-full p-2 mr-2 sm:mr-4 mb-2 sm:mb-0 rounded-md md-4" type="name" placeholder="Name" />
        <p className="text-white">Email</p> */}

       {/* <input class="w-full p-2 mr-2 sm:mr-4 mb-2 sm:mb-0 rounded-md md-4
         bg-neutral-700 text-neutral-500 border-blue-500
         text-base
          font-medium
           font-['Graphik'] leading-normal"
          type="email" placeholder="Email"/> */}




{/* <div class=" w-full xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
  <label class="xl:inline-block 2xl:inline-block lg:inline-block 
  md:block sm:block mb-2 md:mb-0 sm:mb-0 
  lg:mb-0 xl:mr-4 2xl:mr-4 text-white" for="email">Email</label>
  <input class="w-full p-2 rounded-md md:4
  mr-2 sm:mr-4 mb-2 sm:mb-0  md-4
  " type="email" id="email" placeholder="Email"/>
</div> */}



       {/* <button className="p-2 mb-2 sm:mb-0 sm:px-8 py-3">Subscribe</button> */}
    {/* </form> */}
</div>
</div>

    )
} 
export default StayFocus;