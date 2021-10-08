import "./Sort/Sort";
import "./Header.css";
function Header() {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <Sort />
    </nav>
  );
}
export default Header;
