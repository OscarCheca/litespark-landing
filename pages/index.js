import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://20.81.154.141:80/') // URL del backend
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Error al conectar al backend:', err));
  }, []);

  if (!data) return <p>Cargando datos...</p>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Landing Litespark</h1>

      <section>
        <h2>Categorías</h2>
        <ul>
          {data.categorias.map(c => (
            <li key={c.categoria_id}>{c.nombre}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Proveedores</h2>
        <ul>
          {data.proveedores.map(p => (
            <li key={p.proveedor_id}>
              {p.nombre} - {p.email} - {p.telefono}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Productos</h2>
        <ul>
          {data.productos.map(pr => (
            <li key={pr.producto_id}>
              {pr.nombre} - ${pr.precio} - Stock: {pr.stock}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}




