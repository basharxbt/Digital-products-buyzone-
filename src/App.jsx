import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Tools from "./components/digitalTools/Tools";
import Navbar from "./components/navbar/Navbar";
import Steps from "./components/steps/Steps";
import SimplePricingCard from "./components/simplePricingCard/SimplePricingCard";
import Explore from "./components/explore/Explore";
import Footer from "./components/footer/Footer";

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
        <Explore></Explore>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
