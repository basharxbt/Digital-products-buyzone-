import React from "react";
import Products from "./products/Products";

const Tools = () => {
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
          <button className="btn btn-primary rounded-3xl rounded-r-none">
            Products
          </button>
          <button className="btn rounded-3xl rounded-l-none">Cart ()</button>
        </div>
      </div>

      <Products></Products>
    </div>
  );
};

export default Tools;
