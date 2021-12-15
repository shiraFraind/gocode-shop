import { useContext } from "react";
import MyContext from "../../MyContext";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "./Product.css";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
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
    <div className="product-card ">
      <Link to={`/product/${id}`}>
        <div className="product-image">
          <img alt="" src={image} />
        </div>
        <div className="product-info">
          <h5>{title}</h5>

          <h6>{`$ ${price}`}</h6>
        </div>
      </Link>
      <h5>{description}</h5>
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
  );
}
export default Product;
// import "./Product.css";
// import
// function Product({ image, id, title, price, description, category }) {
//   const [productsInCart, setProductsInCart] = useContext(MyContext);
//     const getAmount = () => {
//         let findProduct = productsInCart.find((product) => product.id === id)
//         if(findProduct) return findProduct.amount;
//         return ''
//     }
//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img src={image} alt={title} />
//       </div>
//       <div className="product-info">
//         {id}
//         <br />
//         {title}
//         <br />
//         {price}
//         <br />

//         {description}
//         <br />
//         {category}
//         <br />
//       </div>
//     </div>
//   );
// }
// export default Product;
