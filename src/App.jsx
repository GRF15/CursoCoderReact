import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a NaturaLab!" />
    </>
  );
}