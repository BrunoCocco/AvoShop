import CardImg from "../assets/cebada.png";

function ProductCard({ producto, onAgregar}) {
  return (
    <>
    <article className="product-card" key={producto.id}>
      <img className="card-img" src={CardImg} alt={producto.nombre} />
      <div className="card-info">
        <h4>{producto.nombre}</h4>
        <p className="precio">€{producto.precio.toFixed(2)}</p>
        <p className="stock">Stock: {producto.stock}</p>
        <button className="boton" onClick={() => onAgregar(producto)}>
          Agregar al carrito
        </button>
      </div>
    </article>
    </>
  );
}

export default ProductCard;
