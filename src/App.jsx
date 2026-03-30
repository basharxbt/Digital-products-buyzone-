import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Tools from "./components/digitalTools/Tools";
import Navbar from "./components/navbar/Navbar";
import Steps from "./components/steps/Steps";
import SimplePricingCard from "./components/simplePricingCard/SimplePricingCard";

function App() {
  const [addProducts, setAddProducts] = useState([]);
  const productTotalPrice = addProducts.reduce(
    (total, product) => total + product.price,
    0,
  );
  return (
    <>
      <div>
        <Navbar
          productTotalPrice={productTotalPrice}
          addProducts={addProducts}
        ></Navbar>
        <Banner></Banner>
        <Tools
          productTotalPrice={productTotalPrice}
          addProducts={addProducts}
          setAddProducts={setAddProducts}
        ></Tools>
        <Steps></Steps>
        <SimplePricingCard></SimplePricingCard>
      </div>
    </>
  );
}

export default App;
