import { useEffect, useState } from "react";

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://20.81.154.141:80/") // tu backend Express
      .then((res) => {
        if (!res.ok) throw new Error("Error al conectar con el servidor");
        return res.json(); // esperamos JSON del backend
      })
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Litespark Landing Page</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!error && productos.length === 0 && <p>Cargando productos...</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
        {productos.map((p) => (
          <div key={p.producto_id} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", width: "220px" }}>
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <p><strong>Precio:</strong> ${p.precio}</p>
            <p><strong>Stock:</strong> {p.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


