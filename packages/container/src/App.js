import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingAppComp from "./components/MarketingAppComp";
import Header from "./components/Header";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingAppComp />
      </div>
    </BrowserRouter>
  );
};
