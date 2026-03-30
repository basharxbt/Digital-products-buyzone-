import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const CartSingleProduct = ({ product, setAddProducts, addProducts }) => {
  const removeProductHandle = () => {
    const remainProducts = addProducts.filter(
      (removeProduct) => removeProduct.id !== product.id,
    );
    setAddProducts(remainProducts);
  };

  return (
    <div>
      <div className=" flex flex-col justify-center ">
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
          <button
            onClick={removeProductHandle}
            className="flex gap-2 items-center btn text-red-500 font-medium"
          >
            Remove <FaDeleteLeft></FaDeleteLeft>/
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSingleProduct;
