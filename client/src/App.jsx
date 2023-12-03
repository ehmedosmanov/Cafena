import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./layout/Main";
import Home from "./pages/Home";
import "../src/assets/scss/main.scss";
import Faq from "./pages/Faq";
import Not404 from "./pages/Not404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home/>}/>
        <Route path="/faq" element={<Faq/>}/>
        {/* ABOUT */}
        {/* MENU */}
        {/* RESERVATION */}
        {/* FAQ */}
        {/* SHOP */}
        {/* CONTACT */}
      </Route>
        <Route path="/*" element={<Not404/>}/>
    </Routes>
  );
}

export default App;
