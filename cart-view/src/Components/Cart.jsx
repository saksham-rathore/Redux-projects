import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <h1 className="text-4xl font-black text-gray-900 tracking-tighter">
            Your <span className="text-blue-600">Cart.</span>
          </h1>
          <Link
            to="/"
            className="text-blue-600 font-bold hover:underline flex items-center gap-2"
          >
            « Continue Shopping
          </Link>
        </div>

        <div className="p-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="mb-6 flex justify-center">
                <div className="bg-gray-100 p-6 rounded-full text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
              <Link to="/" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-colors">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 group transition-all hover:bg-white hover:shadow-md">
                  <div className="h-24 w-24 rounded-xl overflow-hidden shadow-sm">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <p className="text-blue-600 font-extrabold text-lg">$1,000</p>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
              
              <div className="mt-12 p-8 bg-gray-900 rounded-3xl text-white flex justify-between items-center shadow-2xl">
                <div>
                  <p className="text-gray-400 font-medium">Total Amount</p>
                  <p className="text-4xl font-black">${cartItems.length * 1000}</p>
                </div>
                <button className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                  Checkout Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;