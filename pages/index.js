 import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://20.81.154.141:80/') // URL de tu backend
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Error fetching backend:', err));
  }, []);

  if (!data) return <p>Cargando...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Productos</h1>
      <ul>
        {data.productos.map(prod => (
          <li key={prod.producto_id}>
            {prod.nombre} - ${prod.precio}
          </li>
        ))}
      </ul>

      <h2>Categorías</h2>
      <ul>
        {data.categorias.map(cat => (
          <li key={cat.categoria_id}>{cat.nombre}</li>
        ))}
      </ul>

      <h2>Proveedores</h2>
      <ul>
        {data.proveedores.map(prov => (
          <li key={prov.proveedor_id}>{prov.nombre}</li>
        ))}
      </ul>
    </div>
  );
}


