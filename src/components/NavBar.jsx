import CartWidget from "./CartWidget.jsx";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/naturalab-logo-transparent.png" alt="NaturaLab Logo" />
      </div>
      <div className="navbar-links-container">
        <ul className="navbar-links">
            <li><a>Futos Secos</a></li>
            <li><a>Snaks</a></li>
            <li><a>Merch</a></li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}
