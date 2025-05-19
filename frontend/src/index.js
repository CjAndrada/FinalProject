import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import LogIn from "./Components/LogInPage/LogIn";
import Notfoundpage from "./Components/Notfoundpage/Notfoundpage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/Shop", element: <ShopPage /> },
  { path: "/Login", element: <LogIn /> },
  { path: "*", element: <Notfoundpage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
