import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { _404 } from "./pages/_404";
import { Details } from "./pages/details.tsx";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/404" element={<_404/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path ="*" element={<Navigate to="/404" />}/>
    </Routes>
    </>
  )
}

export default App
