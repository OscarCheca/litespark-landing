
export async function getServerSideProps() {
  const res = await fetch('http://20.81.154.141:80/');
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
    </div>
  );
}





