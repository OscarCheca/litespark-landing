import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://20.81.154.141:80/") // tu backend
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("Error al conectar backend:", err));
  }, []);

  if (!data) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Litespark Landing Page</h1>

      <h2>Categorías</h2>
      <ul>
        {data.categorias.map(c => (
          <li key={c.categoria_id}>{c.nombre}</li>
        ))}
      </ul>

      <h2>Productos</h2>
      <ul>
        {data.productos.map(p => (
          <li key={p.producto_id}>{p.nombre} - ${p.precio}</li>
        ))}
      </ul>

      <h2>Clientes</h2>
      <ul>
        {data.clientes.map(c => (
          <li key={c.cliente_id}>{c.nombres} {c.apellidos}</li>
        ))}
      </ul>
    </div>
  );
}




