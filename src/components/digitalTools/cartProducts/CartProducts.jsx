import React from "react";
import CartSingleProduct from "./CartSingleProduct";

const CartProducts = ({ setAddProducts, addProducts }) => {
  return (
    <div
      className="space-y-5 border-1 border-neutral-200 p-10 my-10 rounded-3xl
    "
    >
      <h3 className="text-3xl font-semibold text-neutral-700">Your Cart</h3>
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
