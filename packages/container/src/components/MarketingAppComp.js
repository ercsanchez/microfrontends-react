import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      onNavigate: (location) => {
        console.log(location); // location arg passed by history.listen
      },
    });
  });

  return <div ref={ref} />;
};
