// import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";

function AddCart() {
  const Products = useSelector((state) => state.cart.items);
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="border rounded-xl h-100 w-300">
          <h1 className="text-3xl font-bold mb-6 flex justify-center items-center">
            Your Cart
          </h1>
          <div className="flex gap-4 overflow-x-auto">
            {Products.length > 0 ? (
              Products.map((item) => (
                <div key={item.id} className="border p-3 rounded-xl min-w-[200px]">
                  <img
                    src={item.Image}
                    alt={item.title}
                    width={300}
                    className="w-full h-40 object-cover"
                  />
                  <h3>{item.title}</h3>
                  <p>${item.Price}</p>
                </div>
              ))
            ) : (
              <p className="flex justify-center text-center">Your cart is empty 🛒</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCart;
