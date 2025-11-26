import { productos } from "./productos.js";
import ProductCard from "./ProductCar.jsx";
import Carrito from "./Carrito.jsx";
import { useState } from "react";

function Main({ vista, setVista }) {
  const [main, setMain] = useState(productos);
  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(p) {
    setCarrito([...carrito, p]);
    console.log(carrito);
  }
  
  function borrarItem(id) {
  setCarrito(carrito.filter((p, i) => i !== id));
}


  function Oferta() {
    const listaOfertas = productos.filter(
      (p) => p.stock > 20 && p.precio < 3.9
    );
    setMain(listaOfertas);
  }

  function TodosProd() {
    const listasTodos = productos.filter((p) => p.stock > 0);
    setMain(listasTodos);
  }

  return (
    <>
      {vista === "productos" && (
        <section  className="product-list">
          {main.map((p) => (
            <ProductCard
              key={p.id}
              producto={p}
              onAgregar={agregarAlCarrito}
              onOferta={Oferta}
              onTodos={TodosProd}
            />
          ))}
        </section>
      )}

      {vista === "carrito" && <Carrito carrito={carrito} setVista={setVista} borrarItem={borrarItem}/>}
    </>
  );
}

export default Main;
