import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from 'react'
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </>
  )
}

export default App
