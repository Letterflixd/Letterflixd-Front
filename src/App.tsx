import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { _404 } from "./pages/_404";
import { Details } from "./pages/details.tsx";
import { Connection } from "./pages/Connection.tsx";
import { Inscription } from "./pages/Inscription.tsx";
import { AccueilFilm } from "./pages/AccueilFilm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<_404 />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/accueilFilm" element={<AccueilFilm />} />
      </Routes>
    </>
  )
}

export default App
