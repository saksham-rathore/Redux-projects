import React from "react";

function Products(props) {

  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={props.name}
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{props.name}</h2>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-gray-400 line-through">$1,200</span>
          <span className="text-xl font-extrabold text-blue-600">Price : $1,000</span>
        </div>
        
        <button
          className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transform transition-all hover:bg-blue-600 active:scale-95 shadow-md hover:shadow-blue-200"
        >
          <span>Add to Cart</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Products;
