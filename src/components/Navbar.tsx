import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <header className={"header"}>
            <div className={"logo-container"}>
                <img src={logo} alt="Netflop Logo" className="netflop-logo"/>
            </div>
            <div className={"nav-buttons"}>
                <button className={"btn-identification"}>S'identifier</button>
                <button className={"btn-connexion"}>Se connecter</button>
            </div>
        </header>
)
}
