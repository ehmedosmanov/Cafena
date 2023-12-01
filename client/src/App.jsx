import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./layout/Main";
import Home from "./pages/Home";
import "../src/assets/scss/main.scss";
import About from "./pages/About";
import ReservationPage from "./pages/ReservationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/reservation" element={<ReservationPage/>}/>
        {/* ABOUT */}
        {/* MENU */}
        {/* RESERVATION */}
        {/* FAQ */}
        {/* SHOP */}
        {/* CONTACT */}
      </Route>
    </Routes>
  );
}

export default App;
