import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { path } from "./Routes/Router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.LOGIN} element={<Login />} />
      <Route path={path.REGISTER} element={<Signup />} />
    </Routes>
  );
}

export default App;
