import { Route, Routes } from "react-router-dom";
import "./App.css";
import Headerbar from "./Components/Headerbar";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import LogIn from "./Components/LogInPage/LogIn";
import Signup from "./Components/SignUp/Signup";
import CartPage from "./Components/CheckoutPage/CartPage";
import { CartProvider } from "./Components/CheckoutPage/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Headerbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/CartPage" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
