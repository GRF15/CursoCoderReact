import React from "react";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  return (
    <div className="productCard">
      <img src={item.image} alt={item.title}/>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
}

export default ItemDetail;
