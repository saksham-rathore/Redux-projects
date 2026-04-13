import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addToCart } from "./Redux/CartSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const Products = [
    {
      id: nanoid(),
      title: "jeans",
      Price: 233,
      Image:
        "https://plus.unsplash.com/premium_photo-1773908602981-0788f7a7f9da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: nanoid(),
      title: "pant",
      Price: 654,
      Image:
        "https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: nanoid(),
      title: "Tie",
      Price: 874,
      Image:
        "https://images.unsplash.com/photo-1776002394636-9355911ed25e?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: nanoid(),
      title: "belt",
      Price: 654,
      Image:
        "https://images.unsplash.com/photo-1773772255047-74744067601e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border rounded-xl h-100 w-300 flex justify-center items-center gap-5">
          <div className="flex gap-5">
            {Products.map((Products) => (
              <div key={Products.id} className="border p-3 rounded-xl w-64">
                <img
                  src={Products.Image}
                  alt={Products.title}
                  width={300}
                  className="w-full h-40 object-cover"
                />
                <h3>{Products.title}</h3>
                <p>${Products.Price}</p>

                <button
                  onClick={() => {
                    // console.log("Clicked Product:", Products);
                    dispatch(addToCart(Products));
                  }}
                  className="bg-black text-white px-3 py-1 rounded mt-2"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          className="border rounded-xl flex justify-center items-center p-5 bg-blue-500 text-white"
          onClick={() => navigate("/addcart")}
        >
          Cart
        </button>
      </div>
    </>
  );
}

export default App;
