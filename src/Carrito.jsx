import React from "react";

const Carrito = ({ carrito }) => {
  // Calcular el total del carrito
  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            <span>
              <strong>Nombre:</strong> {producto.nombre}
            </span>
            <span>
              <strong>Cantidad:</strong> {producto.cantidad}
            </span>
            <span>
              <strong>Precio:</strong> ${producto.precio}
            </span>
            <span>
              <strong>Total:</strong> ${producto.precio * producto.cantidad}
            </span>
          </li>
        ))}
      </ul>
      <h3>Total del carrito: ${total}</h3>
    </div>
  );
};

export default Carrito;
