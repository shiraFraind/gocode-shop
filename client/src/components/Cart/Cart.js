import { useContext, useEffect } from "react";
import MyContext from "../../MyContext";
import Products from "../Products/Products";
import React from "react";

function Cart() {
  const [productsInCart, setProductsInCart] = useContext(MyContext);
  let totalPayment = 0;
  const getTotalPayment = () => {
    productsInCart.map((pro) => (totalPayment += pro.price * pro.amount));
    return totalPayment;
  };

  return (
    <div>
      <h2>
        The cart <span>🛒</span>
      </h2>

      <Products products={productsInCart} />
      <h2>total payment: {getTotalPayment()}$</h2>
    </div>
  );
}

export default Cart;
