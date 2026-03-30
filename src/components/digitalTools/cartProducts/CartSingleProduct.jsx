import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const CartSingleProduct = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div className="">
        <h3>Your Cart</h3>
        <div className="flex justify-between p-6 bg-base-200 rounded-2xl">
          <div className="flex items-center gap-4 ">
            <img className="w-8 h-8 rounded-lg" src={product.icon} alt="" />
            <div>
              <h3 className="text-2xl font-semibold text-neutral-600">
                {product.name}
              </h3>
              <p
                className="text-neutral-500 font-medium
              "
              >
                ${product.price}
              </p>
            </div>
          </div>
          <p className="flex gap-2 items-center text-red-500">
            Remove <FaDeleteLeft></FaDeleteLeft>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartSingleProduct;
