import { productos } from "./productos.js";

function Main() {
    
  function ver(p){
    let dato = p.precio
        console.log(dato)
    }

  return (
    <section className="product-list">
      {productos.map((p) => (
        <article className="product-card" key={p.id}>
          <h4>{p.nombre}</h4>
          <p>€{p.precio.toFixed(2)}</p>
          <button className="boton" onClick={() => ver(p)}>ver Precio</button>
        </article>
      ))}
    </section>
  );
}

export default Main;
