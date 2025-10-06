import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cambia la IP y puerto por tu backend real
    fetch("http://20.81.154.141:80/api/data")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener datos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (!data) return <p>No se pudieron cargar los datos.</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Landing Page Litespark</h1>

      <section>
        <h2>Categorías</h2>
        <ul>
          {data.categorias.map((cat) => (
            <li key={cat.categoria_id}>{cat.nombre}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Productos</h2>
        <ul>
          {data.productos.map((prod) => (
            <li key={prod.producto_id}>
              <strong>{prod.nombre}</strong> - ${prod.precio} - Stock: {prod.stock}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}




