import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { path } from "./Routes/Router";
import Getstarted from "./pages/Getstarted";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.Getstarted} element={<Getstarted/>} />

    </Routes>
  );
}

export default App;