import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a NaturaLab!" />} />
            <Route path="/category/" element={<ItemDetailContainer /> } />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
    </>
  );
}