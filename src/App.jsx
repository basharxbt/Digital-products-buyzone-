import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Tools from "./components/digitalTools/Tools";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [addProducts, setAddProducts] = useState([]);
  return (
    <>
      <div>
        <Navbar addProducts={addProducts}></Navbar>
        <Banner></Banner>
        <Tools
          addProducts={addProducts}
          setAddProducts={setAddProducts}
        ></Tools>
      </div>
    </>
  );
}

export default App;
