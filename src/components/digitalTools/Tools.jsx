import React, { Suspense, useState } from "react";
import Products from "./products/Products";
import CartProducts from "./cartProducts/CartProducts";
import { IoCartOutline } from "react-icons/io5";

const Tools = ({ addProducts, setAddProducts, productTotalPrice }) => {
  const productsPromise = fetch("/data.json").then((res) => res.json());
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
            className={`btn ${productSection === "products" ? "bg-gradient-to-r from-[#4E39F6] to-[#9514FA] text-white " : ""} rounded-3xl rounded-r-none`}
          >
            Products
          </button>
          <button
            onClick={() => setProducSection("cart")}
            className={`btn ${productSection === "cart" ? "bg-gradient-to-r from-[#4E39F6] to-[#9514FA] text-white " : ""} rounded-3xl  rounded-l-none`}
          >
            Cart ({addProducts.length})
          </button>
        </div>
      </div>
      <Suspense
        fallback={
          <div className=" flex justify-center items-center my-10">
            <span className="loading loading-bars loading-xl bg-purple-700 "></span>
          </div>
        }
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
            productTotalPrice={productTotalPrice}
            addProducts={addProducts}
            setAddProducts={setAddProducts}
          ></CartProducts>
        )}
      </Suspense>
    </div>
  );
};

export default Tools;
