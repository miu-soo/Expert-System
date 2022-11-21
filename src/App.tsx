import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/navbar";
import CheckBoxGejala from "./Components/CheckBoxGejala";
import HitungPersen from "./Components/HitungPersen";

function App() {
  return (
    <>
      <NavBar />
      <CheckBoxGejala />
    </>
  );
}

export default App;
