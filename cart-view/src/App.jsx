import React from "react";
import Products from "./Components/Products";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header / Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-black text-gray-900 tracking-tighter">
          SAMMY<span className="text-blue-600">.</span>
        </h1>
        <button className="relative group p-2 rounded-full hover:bg-gray-100 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span
            className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white">
              {cartCount}
          </span>
        </button>
      </nav>

      {/* Hero Section */}
      <header className="px-8 py-20 text-center bg-white border-b border-gray-100">
        <h2 className="text-6xl font-extrabold text-gray-900 mb-6">
          Elevate Your Style
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Explore our curated collection of high-performance apparel designed
          for the modern explorer.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Products productName="shirt" onAddToCart={handleAddToCart}/>
          <Products productName="Pant" onAddToCart={handleAddToCart}/>
          <Products productName="Tie" onAddToCart={handleAddToCart}/>
          <Products productName="Belt" onAddToCart={handleAddToCart}/>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 text-center text-gray-400">
        <p>© 2026 SAMMY E-com. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
