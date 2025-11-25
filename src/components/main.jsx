import { productos } from "./productos";

function Main() {
  return (
    <section className="product-list">
      {productos.map((p) => (
        <article className="product-card" key={p.id}>
          <h4>{p.nombre}</h4>
          <p>€{p.precio.toFixed(2)}</p>
        </article>
      ))}
    </section>
  );
}

export default Main;
