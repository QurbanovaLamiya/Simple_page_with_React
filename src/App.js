import React from "react";
import "./App.css";
import BoxList from "./components/BoxList";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./components/Data.json/index.json";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Carousel />
        <BoxList productData={data} />
        <Footer />
      </>
    );
  }
}
export default App;
