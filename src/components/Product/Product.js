function Product({ title, price, description, category, image, rating }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        {title}
        <br />
        {price}
        <br />
        {description}
        <br />
        {category}
        <br />
        {rating.rate}
        <br />
        {rating.count}
      </div>
    </div>
  );
}
export default Product;
