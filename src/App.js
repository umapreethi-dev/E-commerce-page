import Navbar from "./components/Navbar";
import "./App.css";

import Footer from "./components/Footer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Productcard from "./components/Productcard";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="/product"
          element={<Productcard cart={cart} setCart={setCart} />}
        />
      </Routes>

      <div className="foot-er">
        <Footer />
      </div>
    </div>
  );
}

export default App;
