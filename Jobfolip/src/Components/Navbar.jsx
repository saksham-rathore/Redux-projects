import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center rounded-full mt-5 px-2">
      <div>
        <img src="./public/Jobfolio.png" alt="logo" />
      </div>

      <div className="flex gap-8 list-none text-gray-700">
        <li>Features</li>
        <li>How it works</li>
        <li>Reviews</li>
      </div>

      <div>
        <button
          className=" bg-gradient-to-b from-gray-600 to-black 
  text-white 
  px-6 py-2 
  rounded-full 
  shadow-[0_2px_10px_rgba(0,0,0,0.6)] 
  border border-gray-600"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;
