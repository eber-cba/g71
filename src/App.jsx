import { useState } from "react";
import data from "../data.json";
import ProductoList from "./ProductoList";

function App() {
  const [productos, setProductos] = useState(data);
  const [nuevoProducto, setNuevoProducto] = useState("");

  // capturar el valor del input
  const manejarCambios = (e) => {
    setNuevoProducto(e.target.value); // cambiando o actualizando el estado
  };

  const agregarProducto = (e) => {
    // evitaba
    if (nuevoProducto !== "") {
      const nuevo = {
        id: productos.length + 1, // genera un id unico
        nombre: nuevoProducto,
        disponible: true,
        precio: 0,
      };

      setProductos([...productos, nuevo]);
    }
  };

  return (
    <div>
      <h1>Aplicación de Productos</h1>

      <form onSubmit={agregarProducto}>
        <input type='text' value={nuevoProducto} onChange={manejarCambios} />
        <button type='submit'>agregar tarea</button>
      </form>

      <ProductoList productos={productos} />
    </div>
  );
}

export default App;
