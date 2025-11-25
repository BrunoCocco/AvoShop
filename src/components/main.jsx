import { productos } from "./productos.js";
import CardImg from "../assets/cebada.png";
import { useState } from "react";

function Main() {
  const [main , setMain] = useState(productos)
 
  function ver(p) {
    let dato = `Solo quedan: ${p.stock} a $${p.precio}`;
    console.log(dato);
  }

  function Oferta() {
    const listaOfertas = productos.filter(p => p.stock > 20 && p.precio < 3.90);
    setMain(listaOfertas)
  }

  function TodosProd() {
    const listasTodos = productos.filter(p => p.stock > 0);
    setMain(listasTodos)
  }

  return (
    <>
      <button className="boton paddElement" onClick={TodosProd}>Productos</button>
      <button className="boton paddElement" onClick={Oferta}>OFERTAS</button>
  
      <section className="product-list">
        {main.map((p) => (
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

    </>
  );
}

export default Main;
