import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register";
import Cart from "./features/cart/Cart";
import Products from "./features/products/components/Products";
import Checkout from "./features/checkout/Checkout";
import ProductDetail from "./features/products/components/ProductDetail";
import Order from "./features/order/components/Order";

function App() { 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/product/:productId" element={<ProductDetail/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>   
      </BrowserRouter>
  );
}

export default App;
