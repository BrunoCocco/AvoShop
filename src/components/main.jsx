import { productos } from "./productos.js";
import CardImg from "../assets/cebada.png";

function Main() {
  function ver(p) {
    let dato = `Solo quedan: ${p.stock} a $${p.precio}`;
    console.log(dato);
  }

  return (
    <section className="product-list">
      {productos.map((p) => (
        <article className="product-card" key={p.id}>
          <img className="card-img" src={CardImg} alt={p.nombre} />
          <div className="card-info">
            <h4>{p.nombre}</h4>
            <p className="precio">€{p.precio.toFixed(2)}</p>
            <p className="stock">Stock: {p.stock}</p>
            <button className="boton" onClick={() => ver(p)}>
              Ver Precio
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Main;
