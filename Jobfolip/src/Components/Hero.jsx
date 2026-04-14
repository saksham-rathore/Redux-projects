import React from "react";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center mt-48 px-4 text-center">
      <div className="glass border border-gray-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] px-5 py-1.5 rounded-full mb-10 animate-soft-up">
        <span className="text-[12px] font-bold tracking-widest text-gray-500 bit-font uppercase">
          Revolutionizing Job Search
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 max-w-4xl leading-[1.1] mb-8 animate-soft-up delay-100">
        Find Jobs{" "}
        <span className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-2xl mx-1 -rotate-3 hover:rotate-0 transition-transform duration-300">
          <img
            src="./public/Bag.png"
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
            alt="bag"
          />
        </span>{" "}
        that <br className="hidden md:block" /> actually Match You
      </h1>

      <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed animate-soft-up delay-200">
        Jobfolio leverages next-gen AI to bridge the gap between talent and opportunity. 
        Your career journey, simplified.
      </p>
      
      <div className="mt-12 flex gap-4 animate-soft-up delay-300">
        <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
          Get Started Now
        </button>
        <button className="bg-white border border-gray-100 text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm">
          View Demo
        </button>
      </div>
    </div>
  );
}

export default Hero;

