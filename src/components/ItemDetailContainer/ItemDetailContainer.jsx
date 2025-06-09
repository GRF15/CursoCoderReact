import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDatail/ItemDetail.jsx";
import "./ItemDetailContainer.css";

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{
        id: 1,
        title: "Mix de Frutos Secos",
        category: "Frutos Secos",
        stock: 25,
        image: "src/assets/FrutosSecos1.jpg",
        description: "Delicioso mix de frutos secos con nueces, castañas y almedras.",
        price: 250
      },
      {
        id: 2,
        title: "Tote Bag de Algodón",
        category: "Merch",
        stock: 50,
        image: "src/assets/Bolsa1.png",
        description: "Tote bag de algodón orgánico, ideal para llevar tus compras.",
        price: 200
      },
      {
        id: 3,
        title: "Remera de Algodón",
        category: "Merch",
        stock: 10,
        image: "src/assets/Remera1.jpg",
        description: "Remera de algodón orgánico, suave y cómoda.",
        price: 550
      }
    ])
    }, 2000);
})};

function ItemDetailContainer() {
    const [items, setItems] = useState([]);

    useEffect( ()=>{
        getItems()
        .then((data) => setItems(data))
        .catch ((error) => console.error("Error al obtener el item:", error))
        }, []);

    return (
      <article className="itemDetailContainer">
        <div className="itemDetailContainer-content">
          {items.length > 0 ? items.map((item) => <ItemDetail key={item.id} item={item} />) : <p className="cargando">Cargando...</p>}
        </div>
      </article>
    );

}

export default ItemDetailContainer;
