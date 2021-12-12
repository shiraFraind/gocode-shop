import { useContext } from "react";
import MyContext from "../../MyContext";
import Button from "@mui/material/Button";
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Product.css";
import { Link } from "react-router-dom";
function Product({ id, title, price, description, category, image }) {
  const [productsInCart, setProductsInCart] = useContext(MyContext);

  const getAmount = () => {
    let pro = productsInCart.find((product) => product.id === id);
    if (pro) return pro.amount;
    return 0;
  };

  const AddingProduct = () => {
    let newCart = [];
    let productIndex = productsInCart.findIndex((pro) => pro.id === id);
    if (productIndex > -1) {
      newCart = productsInCart.map((pro) => {
        if (pro.id === id) {
          pro.amount++;
        }
        return pro;
      });
    } else {
      newCart = [...productsInCart, { id, title, price, image, amount: 1 }];
    }
    // console.log(111, newCart);
    setProductsInCart(newCart);
  };
  const ProductRemoval = () => {
    let newProductsList = [];
    // If exist
    let findIndex = productsInCart.findIndex((product) => product.id === id);
    let isNeedDelete = false;
    if (findIndex > -1) {
      //exists
      newProductsList = productsInCart.map((product) => {
        if (product.id === id) {
          if (product.amount > 1) {
            product.amount--;
          } else {
            // delete from list
            isNeedDelete = true;
          }
        }
        return product;
      });
      if (isNeedDelete) {
        newProductsList = productsInCart.filter((product) => product.id !== id);
      }
    } else {
      // not exists
      newProductsList = [...productsInCart];
    }
    setProductsInCart(newProductsList);
  };
  return (
    <Card>
      <div className="product-card ">
        <Link to={`/product/${id}`}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <h6>{`$ ${price}`}</h6>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Link>
        {/* <h5></h5> */}
        <div>
          <Button
            varient="contained"
            onClick={() => {
              AddingProduct();
            }}
          >
            +
          </Button>
          <span>{getAmount()}</span>
          <Button
            varient="contained"
            onClick={() => {
              ProductRemoval();
            }}
          >
            -
          </Button>
        </div>
      </div>
    </Card>
  );
}
export default Product;
