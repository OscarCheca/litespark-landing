import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    // Más adelante conectaremos con tu backend
    setData("<p>Bienvenido a Litespark Landing!</p>");
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Litespark Landing Page</h1>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}

