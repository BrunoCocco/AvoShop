import "../App.css"
function Carrito({ carrito, borrarItem }) {
  return (
    <section className="carrito product-list">
      <h3>🛒 Tu carrito</h3>
      {carrito.length === 0 ? (
        <p>Vacío</p>
      ) : (
        carrito.map((item, i) => (
          <article key={i} className="product-card">
            <div className="card-info">
              <h4>{item.nombre}</h4>
              <p className="precio">€{item.precio.toFixed(2)}</p>
              <button onClick={() => borrarItem(i)}>❌ Eliminar</button>

            </div>
          </article>
        ))
      )}
    </section>
  );
}

export default Carrito;