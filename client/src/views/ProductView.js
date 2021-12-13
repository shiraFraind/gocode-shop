import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Product from "../components/Product/Product";

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  let size = { maxHeight: "300px", maxWidth: "300px" };
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        console.log(res);
      });
  }, [id]);
  return (
    <div style={size}>
      <Product
        image={product?.image}
        title={product?.title}
        price={product?.price}
        description={product?.description}
        id={product?.id}
      ></Product>
    </div>
  );
}

export default ProductView;
