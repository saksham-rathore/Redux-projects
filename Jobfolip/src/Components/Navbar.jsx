import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-[900px] glass rounded-full px-4 py-1 flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/50">
        <div className="flex items-center gap-3">
          <div className="w-34 h-auto flex items-center justify-center">
            <img
              src="./public/Jobfolio.png"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <ul className="hidden md:flex gap-10 text-[13px] font-medium text-gray-500 heading-font">
          <li className="hover:text-black cursor-pointer transition-colors duration-200">
            Features
          </li>
          <li className="hover:text-black cursor-pointer transition-colors duration-200">
            Solutions
          </li>
          <li className="hover:text-black cursor-pointer transition-colors duration-200">
            Pricing
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="bg-white text-black border border-gray-100 px-6 py-2 rounded-full text-[13px] font-bold hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm side-shine relative overflow-hidden">
            <span className="relative z-10">Sign In</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
