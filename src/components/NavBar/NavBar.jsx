import CartWidget from "./Cart/CartWidget.jsx";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/naturalab-logo-transparent.png" alt="NaturaLab Logo" />
      </div>
      <div className="navbar-links-container">
        <ul className="navbar-links">    
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/category/frutos">Futos Secos</NavLink></li>
          <li><NavLink to="/category/merch">Merch</NavLink></li>
          <li><NavLink to="/category/milks">Milks</NavLink></li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}
