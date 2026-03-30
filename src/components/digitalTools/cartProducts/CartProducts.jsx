import React from "react";
import CartSingleProduct from "./CartSingleProduct";

const CartProducts = ({ setAddProducts, addProducts }) => {
  return (
    <div>
      {addProducts.map((product) => {
        return (
          <CartSingleProduct
            product={product}
            key={product.id}
          ></CartSingleProduct>
        );
      })}
    </div>
  );
};

export default CartProducts;
