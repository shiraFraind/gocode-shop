import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import { useState, useEffect } from "react";
import TemporaryDrawer from "../components/TemporaryDrawer/TemporaryDrawer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Fab } from "@mui/material";

function ProductsView() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [productsDynamicList, setProductsDynamicList] = useState(null);
  const [allProductsList, setAllProductsList] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        setProductsList(products);
        setAllProductsList(products);
        let categories = products
          .map((p) => p.category)
          .filter((value, index, array) => array.indexOf(value) === index);
        setCategoriesList(categories);
      });
  }, []);
  const filterByCategory = (category) => {
    console.log("hadasa");
    if (category === "/") {
      setProductsList(allProductsList);
    } else {
      let filteredProducts = allProductsList.filter(
        (product) => product.category === category
      );
      setProductsList(filteredProducts);
      setProductsDynamicList(filteredProducts);
    }
  };
  const filterByPrice = (price) => {
    let filteredProducts;
    if (!productsDynamicList) {
      filteredProducts = productsList.filter(
        (product) => product.price >= price[0] && product.price <= price[1]
      );
    } else {
      filteredProducts = productsDynamicList.filter(
        (product) => product.price >= price[0] && product.price <= price[1]
      );
    }

    setProductsList(filteredProducts);
  };
  return (
    <div>
      <Header
        Categories={categoriesList}
        filterProducts={filterByCategory}
        filterPrices={filterByPrice}
      />
      <TemporaryDrawer />
      <hr />
      <Products products={productsList} />
    </div>
  );
}
export default ProductsView;
