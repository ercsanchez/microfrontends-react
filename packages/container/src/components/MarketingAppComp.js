import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        console.log(nextPathname); // pathname property of location obj

        // prevent infinite loop caused by updating of histories in container and marketing

        // figure out if current path is diff. from next path
        const { pathname } = history.location;

        // if same path, do not alter browser history

        // if diff paths, update browser history
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
  });

  return <div ref={ref} />;
};
