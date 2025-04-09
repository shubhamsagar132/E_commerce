import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import w_shirt1 from "../../assets/products/w_shirt1.jpg";
import w_shirt2 from "../../assets/products/w_shirt2.jpg";
import w_shirt3 from "../../assets/products/w_shirt3.jpg";
import w_shirt4 from "../../assets/products/w_shirt4.jpg";

const shirtData = [
  {
    id: 1,
    title: "Starry Collar Shirt",
    image: w_shirt1,
    price: "$34",
    description: "Formal shirt with subtle star night details.",
  },
  {
    id: 2,
    title: "Hero Sketch Shirt",
    image: w_shirt2,
    price: "$36",
    description: "White shirt with a pencil sketch superhero logo.",
  },
  {
    id: 3,
    title: "Astral Plaid Shirt",
    image: w_shirt3,
    price: "$38",
    description: "Plaid shirt with a cosmic color palette.",
  },
  {
    id: 4,
    title: "Comic Strip Shirt",
    image: w_shirt4,
    price: "$35",
    description: "Button-up shirt with comic strip all-over print.",
  },
];

const WomensShirts = ({ handleOrderPopup }) => (
  <section className="py-10 px-5 md:px-10">
    <h2 className="text-3xl font-extrabold text-yellow-300 mb-6">Women's Shirts</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {shirtData.map((item) => (
        <ProductCard key={item.id} {...item} onOrder={handleOrderPopup} />
      ))}
    </div>
  </section>
);

export default WomensShirts;
