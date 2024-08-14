import React from "react";

export default function ProductoList({ productos }) {
  return (
    <div>
      <h2>lista de productos:</h2>

      <ul>
        {productos.map((producto, index) => (
          <li key={index}>nombre: {producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
