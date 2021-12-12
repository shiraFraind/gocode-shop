import Product from "../Product/Product";
import "./Products.css";
function Products({ products }) {
  return (
    <section className="products">
      {products.map((pro) => (
        <Product
          key={pro.id}
          image={pro.image}
          id={pro.id}
          amount={pro.amount}
          title={pro.title}
          price={pro.price}
          description={pro.description}
          category={pro.category}
        />
      ))}
    </section>
  );
}
export default Products;
