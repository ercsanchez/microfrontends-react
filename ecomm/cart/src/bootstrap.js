import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

// Context/Situation #1: isolated dev in Cart app

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart-in-isolation");

  if (el) {
    mount(el);
  }
}

// Context/Situation #2: render in Container app

export { mount };
