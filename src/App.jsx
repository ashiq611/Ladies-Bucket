import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import ShippingDetails from "./pages/ShippingDetails";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shipping-details" element={<ShippingDetails />} />
          <Route path="/account" element={<MyAccount />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
