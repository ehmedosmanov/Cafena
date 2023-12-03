import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./layout/Main";
import Home from "./pages/Home";
import "../src/assets/scss/main.scss";
import Faq from "./pages/Faq";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home/>}/>
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
