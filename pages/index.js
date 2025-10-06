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
        {data.carrito_compras.map(c => (
          <li key={c.carrito_id}>
            {c.carrito_id} - Cliente: {c.cliente_id} - Producto: {c.producto_id} - Cantidad: {c.cantidad} - Agregado: {new Date(c.fecha_agregado).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <h2>Transacciones</h2>
      <ul>
        {data.transacciones.map(t => (
          <li key={t.transaccion_id}>
            {t.transaccion_id} - Carrito: {t.carrito_id} - Monto: ${t.monto_pagado} - Método: {t.metodo_pago} - Estado: {t.estado_pago} - Fecha: {new Date(t.fecha_pago).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <h2>Ventas</h2>
      <ul>
        {data.ventas.map(v => (
          <li key={v.venta_id}>
            {v.venta_id} - Cliente: {v.cliente_id} - Total: ${v.total} - Estado: {v.estado_venta} - Fecha: {new Date(v.fecha_venta).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <h2>Detalles de Venta</h2>
      <ul>
        {data.detalles_venta.map(d => (
          <li key={d.detalle_id}>
            {d.detalle_id} - Venta: {d.venta_id} - Producto: {d.producto_id} - Cantidad: {d.cantidad} - Precio Unitario: ${d.precio_unitario} - Transacción: {d.transaccion_id}
          </li>
        ))}
      </ul>

      <h2>Opiniones de Productos</h2>
      <ul>
        {data.opiniones_productos.map(o => (
          <li key={o.opinion_id}>
            {o.opinion_id} - Cliente: {o.cliente_id} - Producto: {o.producto_id} - Puntuación: {o.puntuacion} - Comentario: {o.comentario} - Fecha: {new Date(o.fecha_comentario).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}



