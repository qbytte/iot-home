import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LightBulb from "./pages/LightBulb";
import RoomTemp from "./pages/RoomTemp";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bulb" element={<LightBulb />} />
          <Route path="temps" element={<RoomTemp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
