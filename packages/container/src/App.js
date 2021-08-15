import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import MarketingAppComp from "./components/MarketingAppComp";
import AuthAppComp from "./components/AuthAppComp";
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
          <Switch>
            <Route path="/auth" component={AuthAppComp} />
            <Route path="/" component={MarketingAppComp} />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
