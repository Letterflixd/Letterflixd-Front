import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState } from 'react'
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { _404 } from "./pages/_404";
import { Details } from "./pages/details.tsx";
import {Connection} from "./pages/Connection.tsx";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/404" element={<_404/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path ="*" element={<Navigate to="/404" />}/>
      <Route path="/connection" element={<Connection />}/>
    </Routes>
    </>
  )
}

export default App
