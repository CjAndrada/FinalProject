import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import LogIn from "./Components/LogInPage/LogIn";
import Notfoundpage from "./Components/Notfoundpage/Notfoundpage";
import Signup from "./Components/SignUp/Signup";
import CartPage from "./Components/CheckoutPage/CartPage";
import { CartProvider } from "./Components/CheckoutPage/CartContext";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/Shop", element: <ShopPage /> },
  { path: "/Login", element: <LogIn /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/CartPage", element: <CartPage /> },
  { path: "*", element: <Notfoundpage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <CartProvider>
      {" "}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
