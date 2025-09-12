import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState } from 'react'
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { _404 } from "./pages/_404";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/404" element={<_404/>}/>
      <Route index element={<Navigate to="/404" />}/>
    </Routes>
    </>
  )
}

export default App
