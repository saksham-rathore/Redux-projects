import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-[900px] glass rounded-full px-4 py-1 flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/50">
        <div className="flex items-center gap-3">
          <div className="w-34 h-auto flex items-center justify-center">
             <img src="./public/Jobfolio.png" alt="logo" className="w-full h-full object-contain" />
          </div>
        </div>



        <ul className="hidden md:flex gap-10 text-[13px] font-medium text-gray-500 heading-font">
          <li className="hover:text-black cursor-pointer transition-colors duration-200">Features</li>
          <li className="hover:text-black cursor-pointer transition-colors duration-200">Solutions</li>
          <li className="hover:text-black cursor-pointer transition-colors duration-200">Pricing</li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="bg-black text-white px-5 py-2 rounded-full text-[13px] font-semibold hover:bg-gray-800 transition-all shadow-sm shining-wrapper">
             <span className="relative z-10">Sign In</span>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

