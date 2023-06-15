import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { path } from "./Routes/Router";
import Howitworks from "./pages/Howitworks";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.Howitworks} element={<Howitworks/>} />

    </Routes>
  );
}

export default App;