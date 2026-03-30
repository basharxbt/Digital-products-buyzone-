import React, { Suspense, useState } from "react";
import Products from "./products/Products";
import CartProducts from "./cartProducts/CartProducts";
import { IoCartOutline } from "react-icons/io5";

const Tools = ({ addProducts, setAddProducts }) => {
  const productsPromise = fetch("../../../public/data.json").then((res) =>
    res.json(),
  );
  const [productSection, setProducSection] = useState("products");

  // const handleProductSection = () => {
  //   setProducSection(true);
  // };

  return (
    <div className="container mx-auto my-10">
      <div className="text-center flex flex-col items-center  space-y-6">
        <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed
          <br /> to boost your productivity and creativity.
        </p>
        <div>
          {" "}
          <button
            onClick={() => setProducSection("products")}
            className={`btn ${productSection === "products" ? "btn-primary" : ""} rounded-3xl rounded-r-none`}
          >
            Products
          </button>
          <button
            onClick={() => setProducSection("cart")}
            className={`btn ${productSection === "cart" ? "btn-primary" : ""} rounded-3xl  rounded-l-none`}
          >
            Cart ({addProducts.length})
          </button>
        </div>
      </div>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        {productSection === "products" ? (
          <Products
            productsPromise={productsPromise}
            addProducts={addProducts}
            setAddProducts={setAddProducts}
          ></Products>
        ) : addProducts.length === 0 ? (
          <div
            className="flex flex-col gap-3 justify-center items-center my-10 shadow-sm
           border-1 border-neutral-200 p-50"
          >
            <IoCartOutline className="text-7xl text-neutral-400"></IoCartOutline>
            <p className="text-3xl font-semibold text-neutral-400">
              Your Cart is Empty
            </p>
          </div>
        ) : (
          <CartProducts
            addProducts={addProducts}
            setAddProducts={setAddProducts}
          ></CartProducts>
        )}
      </Suspense>
    </div>
  );
};

export default Tools;
