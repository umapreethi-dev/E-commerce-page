
import Navbar from "./components/Navbar"
import './App.css';
import data from "./components/ProductData"
import Footer from "./components/Footer"
import { useState} from "react"
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart"
import Home from "./components/Home"

function App() {
  const [cart,setCart] = useState(0);

  
  return (
    <div >
     <Navbar  cart={cart}/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/cart" element={<Cart />} />
     </Routes>
    
     
     <div className="foot-er">
       <Footer />
     </div>
     
    </div>
  );
}

export default App;
