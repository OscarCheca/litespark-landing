// pages/index.js

export async function getServerSideProps() {
  const res = await fetch('http://20.81.154.141:80/api/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Landing Page</h1>

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

      <h2>Clientes</h2>
      <ul>
        {data.clientes.map(cli => (
          <li key={cli.cliente_id}>{cli.nombres} {cli.apellidos}</li>
        ))}
      </ul>

      <h2>Productos</h2>
      <ul>
        {data.productos.map(prod => (
          <li key={prod.producto_id}>{prod.nombre} - ${prod.precio}</li>
        ))}
      </ul>
    </div>
  );
}



