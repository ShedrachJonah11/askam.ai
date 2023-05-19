import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Login /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
