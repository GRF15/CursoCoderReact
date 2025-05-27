import { NavLink } from "react-router-dom";
import Carrito from "./Carrito.jsx";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/naturalab-logo-transparent.png" alt="NaturaLab Logo" />
      </div><div className="navbar-links-container">
        <ul className="navbar-links">
            <li><NavLink to="/"> Inicio</NavLink></li>
            <li><NavLink to="/Productos">Productos</NavLink></li>
            <li><NavLink to="/Contacto">Contacto</NavLink></li>
        </ul>
      </div>
      <Carrito />
    </nav>
  );
}
