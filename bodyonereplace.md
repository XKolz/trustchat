<div className="w-full my-32">
  <div className="max-w-[1240px] mx-auto">
    <div className="text-center">
      <p className="text-5xl font-bold py-6">Trusted by thousands, praised by many</p>  
    </div>

    <div className="grid md:grid-cols-3 gap-8 px-2 text-center">
      <div className="w-96 h-96 p-8 bg-black rounded-2xl border-4 border-cyan-400 flex items-center justify-center flex-col">
        <img className="w-32 h-32 rounded-full mb-6" src={bgImg} alt="User" />
        <p className="text-fuchsia-500 text-lg md:text-xl font-medium font-['Graphik'] leading-7">
          “I love the privacy features on this Trustchat. It feels really secure and I can trust that my 
          conversations are kept private and not monitored by any third parties."
        </p>
        <div className="mt-6">
          <p className="text-green-600 text-lg md:text-xl font-semibold font-['Graphik'] leading-6">
            Monkey D. Luffy
          </p>
          <p className="text-fuchsia-500 text-base md:text-lg font-semibold font-['Graphik'] leading-6">
            Chief executive officer, STRAWHAT
          </p>
        </div>
      </div>
      
      {/* Other grid items (percentage values) here */}

      <div className="border py-8 rounded-xl shadow-xl">                    
        <p className="text-6xl text-indigo-600">100%</p>
        <p>Delivery</p>
      </div>
      
      <div className="border py-8 rounded-xl shadow-xl">
        <p className="text-6xl text-indigo-600">24/7</p>
      </div>
    </div>
  </div>
</div>
