import "./ContenedorLista.css";

export default function ContenedorLista({ mensaje }) {
  return (
    <section className="contenidoMostrado">
      <h1>{mensaje}</h1>
    </section>
  );
}
