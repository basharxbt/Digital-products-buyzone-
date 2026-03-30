import React, { use } from "react";
import Product from "./Product";

const Products = ({ productsPromise, setAddProducts, addProducts }) => {
  const products = use(productsPromise);

  return (
    <div className="flex flex-wrap justify-around my-10 gap-10">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            addProducts={addProducts}
            setAddProducts={setAddProducts}
          ></Product>
        );
      })}
    </div>
  );
};

export default Products;
