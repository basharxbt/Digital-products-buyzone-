import "./App.css";
import Banner from "./components/banner/Banner";
import Tools from "./components/digitalTools/Tools";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Tools></Tools>
      </div>
    </>
  );
}

export default App;
