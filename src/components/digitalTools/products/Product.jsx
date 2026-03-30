import React, { useState } from "react";

const Product = ({ product, addProducts, setAddProducts }) => {
  const carProductsHandle = () => {
    const newProducts = [...addProducts, product];
    setAddProducts(newProducts);
    console.log(newProducts);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-sm  hover:-translate-y-2 transition-all duration-300 mt-4">
      <div className="card-body">
        <div className="flex justify-between">
          <img className="w-8 h-8" src={product.icon} alt="icon" />
          <span
            className={`badge badge-xs ${product.tag === "popular" ? "bg-purple-100" : product.tag === "new" ? "badge-info" : "bg-purple-100"} p-3 rounded-full`}
          >
            {product.tag}
          </span>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold"> {product.name}</h2>
          <p>{product.description}</p>
          <span className="text-xl font-semibold text-neutral-600">
            ${product.price}/{product.period}
          </span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{product.features[0]}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{product.features[1]}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{product.features[2]}</span>
          </li>
        </ul>
        <div className="mt-6">
          <button
            onClick={carProductsHandle}
            className="btn bg-gradient-to-r from-[#4E39F6] to-[#9514FA] text-white  btn-block rounded-3xl"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
