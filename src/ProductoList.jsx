import React from "react";

const ProductoList = ({ productos, agregarAlCarrito, quitarDelCarrito }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <span>
              <strong>Nombre:</strong> {producto.nombre}
            </span>
            <span>
              <strong>Precio:</strong> ${producto.precio}
            </span>
            <span>
              <strong>Disponible:</strong> {producto.disponible ? "Sí" : "No"}
            </span>
            <button onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </button>
            <button onClick={() => quitarDelCarrito(producto)}>
              Quitar del carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoList;
