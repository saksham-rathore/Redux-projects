import React from "react";

function Hero() {
  return (
    <div className="relative flex flex-col justify-center items-center pt-48 pb-20 px-4 text-center grid-pattern overflow-hidden">
      <div className="glass border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] px-2 py-2 rounded-full mb-12 animate-float shining-wrapper cursor-default">
        <span className="relative z-10 text-[11px] font-bold tracking-[0.1em] text-gray-500 bit-font uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-400"></span>
          Revolutionizing Job Search
        </span>
      </div>

      <div className="relative z-50 flex flex-col gap-0 mb-12 items-center">
        <h1 className="text-[50px] md:text-[90px] font-black tracking-[-0.09em] leading-[0.8] text-gray-900 animate-soft-up delay-100 uppercase tracking-tight py-2 text-gradient-subtle">
          Find jobs
        </h1>
        <h1 className="text-[55px] md:text-[100px] font-black tracking-[-0.09em] leading-[0.8] text-gradient animate-soft-up delay-200 uppercase tracking-tight py-2">
          that actually
        </h1>
        <h1 className="text-[60px] md:text-[110px] font-black tracking-[-0.09em] leading-[0.8] animate-soft-up delay-300 uppercase tracking-tight py-2 text-gradient-subtle text-gray-900">
          match you
        </h1>
      </div>

      <p className="relative z-50 text-gray-400 text-[13px] md:text-[15px] max-w-sm mx-auto leading-relaxed animate-soft-up delay-300 font-medium">
        Jobfolio leverages next-gen AI to bridge the gap between talent and
        opportunity. Your career journey, simplified.
      </p>

      <div className="mt-16 flex flex-col md:flex-row gap-6 animate-soft-up delay-300 relative z-50">
        <button className="bg-white border border-gray-100 text-gray-900 px-10 py-5 rounded-[2rem] font-bold hover:bg-gray-50 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 shadow-sm text-sm shining-wrapper relative min-w-[200px]">
          <span className="relative z-10">Get Started Now</span>
        </button>
        <button className="bg-transparent border border-gray-100/50 text-gray-400 px-10 py-5 rounded-[2rem] font-bold hover:bg-white hover:border-gray-100 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 text-sm min-w-[200px]">
          View Demo
        </button>
      </div>

    </div>
  );
}

export default Hero;
