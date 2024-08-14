import { useState } from "react";
import data from "../data.json";
import ProductoList from "./ProductoList";
import Carrito from "./Carrito";

function App() {
  // Estado para manejar los productos
  const [productos, setProductos] = useState(data);
  // Estado para manejar los productos en el carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((p) => p.id === producto.id);
      if (productoExistente) {
        // Si el producto ya está en el carrito, solo actualizamos la cantidad
        return prevCarrito.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      // Si no está, lo agregamos al carrito con cantidad 1
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  // Función para quitar un producto del carrito
  const quitarDelCarrito = (producto) => {
    setCarrito((prevCarrito) =>
      prevCarrito.reduce((acc, p) => {
        if (p.id === producto.id) {
          if (p.cantidad > 1) {
            acc.push({ ...p, cantidad: p.cantidad - 1 });
          }
        } else {
          acc.push(p);
        }
        return acc;
      }, [])
    );
  };

  return (
    <div>
      <h1>Aplicación de Productos</h1>
      {/* Incluir el componente ProductoList */}
      <ProductoList
        productos={productos}
        agregarAlCarrito={agregarAlCarrito}
        quitarDelCarrito={quitarDelCarrito}
      />
      {/* Incluir el componente Carrito */}
      <Carrito carrito={carrito} />
    </div>
  );
}

export default App;
