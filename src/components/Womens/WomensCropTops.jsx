import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import w_croptop1 from "../../assets/products/w_croptop1.jpg";
import w_croptop2 from "../../assets/products/w_croptop2.jpg";
import w_croptop3 from "../../assets/products/w_croptop3.jpg";
import w_croptop4 from "../../assets/products/w_croptop4.jpg";

const cropTopData = [
  {
    id: 1,
    title: "Retro Comic Crop",
    image: w_croptop1,
    price: "$26",
    description: "Throwback comic strip style in a cute crop.",
  },
  {
    id: 2,
    title: "Star Dust Crop",
    image: w_croptop2,
    price: "$28",
    description: "Light and breezy crop with galaxy glitter.",
  },
  {
    id: 3,
    title: "Neon Hero Crop",
    image: w_croptop3,
    price: "$30",
    description: "Bold neon superhero symbol on premium fabric.",
  },
  {
    id: 4,
    title: "Pop Art Crop",
    image: w_croptop4,
    price: "$27",
    description: "Comic book pop art pattern for trendsetters.",
  },
];

const WomensCropTops = ({ handleOrderPopup }) => (
  <section className="py-10 px-5 md:px-10">
    <h2 className="text-3xl font-extrabold text-yellow-300 mb-6">Crop Tops</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cropTopData.map((item) => (
        <ProductCard key={item.id} {...item} onOrder={handleOrderPopup} />
      ))}
    </div>
  </section>
);

export default WomensCropTops;
