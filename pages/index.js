import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://20.81.154.141:80/") // mi backend Express
      .then(res => res.text()) // o res.json() si la backend devuelve JSON
      .then(html => setData(html))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Litespark Landing Page</h1>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}


