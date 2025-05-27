import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ContenedorLista from "./components/ContenedorLista.jsx";

export default function App() {
  return (
    <>
      <NavBar />
        <Routes>
            <Route path="/" element={<ContenedorLista mensaje="Bienvenido a NaturaLab" />} />
            <Route path="/Productos" element={<ContenedorLista mensaje="Nuestros Productos" />} />
            <Route path="/Contacto" element={<ContenedorLista mensaje="Contáctanos" />} />
        </Routes>
    </>
  );
}