import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import MarketingAppComp from "./components/MarketingAppComp";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "cont",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingAppComp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
