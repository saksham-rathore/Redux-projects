import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Cart from "./Components/Cart.jsx";

createRoot(document.getElementById("root")).render(
<BrowserRouter>
<Routes>
<Route path="/" element={<App />} />
<Route path="/Cart" element={<Cart />} />
</Routes>
</BrowserRouter>);
