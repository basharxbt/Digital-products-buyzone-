import React from "react";

const Navbar = ({ addProducts, productTotalPrice }) => {
  return (
    <div className=" shadow-sm sticky">
      <div className="navbar bg-base-100 container mx-auto  flex justify-between ">
        <div className="">
          <a className=" text-3xl font-bold text-purple-700">DigiTools</a>
        </div>

        <div>
          <ul className="flex gap-5">
            <a href="">Products</a>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Testimonials</a>
            <a href="">FAQ</a>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {/* cart items show  */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm badge-error indicator-item">
                    {addProducts.length}
                  </span>
                </div>
              </div>

              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {addProducts.length} Items
                  </span>
                  <span className="text-neutral-600 font-bold">
                    Subtotal:{" "}
                    <span className="text-red-600">
                      {productTotalPrice.toFixed(2)}$
                    </span>
                  </span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p></p>
          </div>
          {/*Login Button  */}

          <a href="">Login</a>

          {/* Get Started */}

          <button className="btn bg-gradient-to-r from-[#4E39F6] to-[#9514FA] text-white rounded-full ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
