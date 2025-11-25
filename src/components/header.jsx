import aguacate from "../assets/aguacate.png";

function Header() {
  return (
    <header className="header">
      <article className="header__content">
        <img
          src={aguacate}
          alt="aguacate"
          className="header__logo"
        />
        <h2 className="header__title">AvoShop</h2>
      </article>
    </header>
  );
}

export default Header;
