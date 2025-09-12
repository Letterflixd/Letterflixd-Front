import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from 'react'
import { Test } from "./pages/test";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Test />}/>
    </Routes>
    </>
  )
}

export default App
