import logo from '../assets/logo.png';
import Nlogo from '../assets/Nlogo.png';


import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <header className={"header"}>
            <div className="left-section">
                <div className={"logo-container"}>
                    {location.pathname === "/" ? (
                        <img src={logo} alt="Netflop Logo" className="netflop-logo" />
                    ) : (
                        <img src={Nlogo} alt="Netflop Logo" className="netflop-logo" />
                    )}
                </div>

            </div>

            <div className={"nav-buttons"}>
                <div className={`search-container ${isSearchVisible ? 'active' : ''}`}>
                    {isSearchVisible && (
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Titres, personnes, genres..."
                            autoFocus
                        />
                    )}
                    <button className={"btn-research"} onClick={() => setIsSearchVisible(!isSearchVisible)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>
                <button className={"btn-identification"} onClick={() => navigate("/accueilfilm")}>Accueil</button>
                <button className={"btn-identification"} onClick={() => navigate("/inscription")}>Créer un compte</button>
                <button className={"btn-connexion"} onClick={() => navigate("/connection")}>Se connecter</button>
            </div>
        </header>
    )
}
