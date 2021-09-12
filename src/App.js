import React from "react";
import Search from "./Search";
import Prediction from "./Prediction";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="mikaWeatherApp">
        <Search />
        <Prediction />
        <div className="weatherForecast" id="weatherForecast"></div>
        <Footer />
      </div>
    </div>
  );
}
