import "./ItemListContainer.css";

export default function ItemListContainer({ mensaje }) {
  return (
    <section className="contenidoMostrado">
      <h1>{mensaje}</h1>
    </section>
  );
}
