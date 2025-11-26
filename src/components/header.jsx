import aguacate from "../assets/aguacate.png";

function Header({setVista}) {
  return (
    <header className="header">
      <article className="header__content">
        <img src={aguacate} alt="aguacate" className="header__logo" />
        <h2 className="header__title">AvoShop</h2>
      </article>
      <article>
        <button className="boton" onClick={() => setVista("productos")}>Productos</button>
        <button className="boton" onClick={() => setVista("carrito")}>🛒 Carrito</button>
      </article>
    </header>
  );
}

export default Header;
