import "./ItemListContainer.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.jsx";

export default function ItemListContainer({ mensaje }) {
  return (
    <section className="contenidoMostrado">
      <h1>{mensaje}</h1>
      <div className="itemListContainer">
        <ItemDetailContainer />
      </div>
    </section>
  );
}
