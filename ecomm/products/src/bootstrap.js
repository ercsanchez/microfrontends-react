import faker from "faker";

// take in a reference to an html element
const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
// We are running this file in development in isolation of Products app
// We are using our local index.html file
// Which definitely has an element with id="dev-products"
// We want to immediately render our app into that element

if (process.env.NODE_ENV === "development") {
  //  unique element found only in products index.html
  const el = document.querySelector("#dev-products-in-isolation");

  // assuming our container doesn't have an element
  // with id "dev-products-in-isolation"
  if (el) {
    // we are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// We are running this file in dev or prod
// through the Container app
// No guarantee that an element with an id="dev-products"
// We do not want to immediately render Products app

export { mount };
