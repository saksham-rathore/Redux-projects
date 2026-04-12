import React from "react";

function Cart() {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-2xl w-full text-center transform transition-all hover:scale-[1.01]">
        <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Your Cart
        </h1>
        
        <div className="space-y-6">
          <div className="py-8 border-y border-gray-100">
            <p className="text-xl text-gray-500 uppercase tracking-widest font-medium">Cart Summary</p>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">No Items Found</h2>
          </div>
          <p className="text-gray-500 italic">"Implement your own logic to display cart items here."</p>
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;