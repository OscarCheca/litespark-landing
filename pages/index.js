import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://20.81.154.141:80/") // backend Express
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Litespark Landing Page</h1>

      <h2>Categorías</h2>
      <ul>
        {data.categorias.map(c => (
          <li key={c.categoria_id}>{c.categoria_id} - {c.nombre}</li>
        ))}
      </ul>

      <h2>Proveedores</h2>
      <ul>
        {data.proveedores.map(p => (
          <li key={p.proveedor_id}>
            {p.proveedor_id} - {p.nombre} - {p.direccion} - {p.telefono} - {p.email}
          </li>
        ))}
      </ul>

      <h2>Clientes</h2>
      <ul>
        {data.clientes.map(c => (
          <li key={c.cliente_id}>
            {c.cliente_id} - {c.nombres} {c.apellidos} - {c.direccion} - {c.telefono} - {c.email} - Registrado: {new Date(c.fecha_registro).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <h2>Productos</h2>
      <ul>
        {data.productos.map(p => (
          <li key={p.producto_id}>
            {p.producto_id} - {p.nombre} - {p.descripcion} - ${p.precio} - Stock: {p.stock} - Cat: {p.categoria_id} - Prov: {p.proveedor_id}
          </li>
        ))}
      </ul>

      <h2>Carrito de Compras</h2>
      <ul>
        {data.carrito_compras._



