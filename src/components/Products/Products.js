import react from "react";
import Product from "../Product/Product";
import "./Products.css";

function Products({ productList }) {
  return (
    <section className="products">
      <div>
        {productList.map((product) => (
          <h1 key={product.id}>
            <Product
              //key={product.id}
              //d={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
              rating={product.rating}
            />
          </h1>
        ))}
      </div>
    </section>
  );
}
export default Products;
