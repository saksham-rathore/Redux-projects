import React from "react";

function Hero() {
  return (
    <div className="relative flex flex-col justify-center items-center pt-48 pb-20 px-4 text-center grid-pattern overflow-hidden">
      {/* Architectural Background Triangle */}
      <div 
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] -z-10 opacity-[0.03] pointer-events-none"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'linear-gradient(180deg, #000 0%, transparent 100%)',
          border: '1px solid black'
        }}
      ></div>
      
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
        <h1 className="text-[60px] md:text-[110px] font-black tracking-[-0.09em] leading-[0.8] animate-soft-up delay-300 uppercase tracking-tight py-2 bg-gradient-to-t from-gray-500 to-black bg-clip-text text-transparent">
          match you
        </h1>
      </div>

      <p className="relative z-50 text-gray-400 text-[13px] md:text-[15px] max-w-sm mx-auto leading-relaxed animate-soft-up delay-300 font-medium">
        Jobfolio leverages next-gen AI to bridge the gap between talent and
        opportunity. Your career journey, simplified.
      </p>

      <div className="mt-16 flex flex-col md:flex-row gap-8 animate-soft-up delay-300 relative z-50">
        <button className="bg-white text-black px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3 transition-all duration-700 shadow-lg side-shine group">
          Get Started Now 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
        <button className="bg-transparent text-gray-900 px-8 py-4 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3 relative group overflow-hidden">
          <span className="relative z-10">View Demo</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
          <div className="absolute bottom-3 left-8 right-8 h-[1px] bg-gray-900 origin-left scale-x-100 group-hover:bg-black transition-all"></div>
        </button>
      </div>

    </div>
  );
}

export default Hero;
