import CartSingleProduct from "./CartSingleProduct";
import { Bounce, toast } from "react-toastify";

const CartProducts = ({ setAddProducts, addProducts, productTotalPrice }) => {
  const purchaseHandle = () => {
    (toast.success("Product Purchase Successful"),
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    setAddProducts([]);
  };
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
          Total: <span>{productTotalPrice}$</span>
        </p>

        <button
          onClick={purchaseHandle}
          className="btn btn-primary w-full rounded-2xl"
        >
          Purchase to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
