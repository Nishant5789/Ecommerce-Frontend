import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register";
import Cart from "./features/cart/Cart";
import Products from "./features/products/components/Products";
import Checkout from "./features/checkout/Checkout";



function App() { 
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>   
        </BrowserRouter>
    </>
  );
}

export default App;
