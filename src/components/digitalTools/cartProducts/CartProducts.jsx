import React, { useState } from "react";
import CartSingleProduct from "./CartSingleProduct";

const CartProducts = ({ setAddProducts, addProducts }) => {
  const productTotalPrice = addProducts.reduce(
    (total, product) => total + product.price,
    0,
  );
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
            setAddProducts={setAddProducts}
            addProducts={addProducts}
            key={product.id}
          ></CartSingleProduct>
        );
      })}
      <div className="space-y-4">
        <p className="flex justify-between text-2xl font-semibold">
          Total: <span>{productTotalPrice}</span>
        </p>

        <button
          onClick={() => {
            setAddProducts([]);
          }}
          className="btn btn-primary w-full rounded-2xl"
        >
          Purchase to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
