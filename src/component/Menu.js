import React from "react";

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <ul>
        <li>
          <img src="pizza-photo.jpg" alt="Pizza" />
          <h3>Pizza</h3>
          <p>Delicious pizzas made with fresh ingredients.</p>
        </li>
        <li>
          <img src="burger-photo.jpg" alt="Burger" />
          <h3>Burger</h3>
          <p>Juicy burgers with a variety of toppings.</p>
        </li>
        <li>
          <img src="pasta-photo.jpg" alt="Pasta" />
          <h3>Pasta</h3>
          <p>Delectable pasta dishes cooked to perfection.</p>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
