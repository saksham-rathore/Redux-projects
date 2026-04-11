import React from "react";
import { Routes } from "react-router";
import { useState } from "react";

function Products(props) {
  const [Cart, setCart] = useState([]);

  const handleclick = () => {
    setCart([...Cart, props.name])
  };

  return (
    <>
      <div>
        <div className="border rounded-2xl h-100 w-100 overflow-hidden">
          <div className="h-90 w-full">
            <img
              src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover"
            />
            <h1 className="text-4xl flex justify-center">{props.name}</h1>
            <h1 className="flex justify-center text-2xl">Price : $1000</h1>
            <button
              className="flex items-center ml-35 bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleclick}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
