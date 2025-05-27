import "./NavBar.css";

export default function Carrito() {
  return (
    <div className="cart-widget">
      <span role="img" className="cart-icon"><img src="src/assets/carro.png" alt="carrito" className="cart-icon"/></span>
      <span className="cart-count">10</span>
    </div>
  );
}
