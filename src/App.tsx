import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from 'react'
import { Test } from "./pages/test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />}/>
    </Routes>
  )
}

export default App
