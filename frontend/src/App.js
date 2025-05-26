
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import LogIn from "./Components/LogInPage/LogIn";
import Signup from "./Components/SignUp/Signup";
import CartPage from "./Components/CheckoutPage/CartPage";
import ProductList from "./Components/CheckoutPage/ProductList";
import { CartProvider } from "./Components/CheckoutPage/CartContext";


function App() {
  return (
    <CartProvider>
      <Routes>
 
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
