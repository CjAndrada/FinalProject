import { Route, Routes } from "react-router-dom";
import "./App.css";
import Headerbar from "./Components/Headerbar";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import LogIn from "./Components/LogInPage/LogIn";

function App() {
  return (
    <>
      <Headerbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
