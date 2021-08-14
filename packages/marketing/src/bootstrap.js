import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";

import App from "./App";

// Mount function to start up app

const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  // check if onNavigate was actually passed
  // only happens when container is run and marketing is not running in isolation
  if (onNavigate) {
    history.listen(onNavigate); // memory history
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      console.log(nextPathname);

      // prevent infinite loop caused by updating of histories in marketing and container
      const { pathname } = history.location;

      // if same path, do not alter memory history

      // if diff paths, update memory history
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in dev and in isolation,
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot, {});
  }
}

// We are running through container
// and we should export the mount function

export { mount };
