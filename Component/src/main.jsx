import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { Provider } from "react";
// import store from "./Redux/store.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import AddCart from "./AddCart.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addcart" element={<AddCart />} />
      </Routes>
    </Router>
  </Provider>
);
