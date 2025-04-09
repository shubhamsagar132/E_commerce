// src/components/ProductCard/TopRated.jsx
import React from "react";
import ProductCard from "./ProductCard";

import jacket1 from "../../assets/products/jacket1.jpg";
import tshirt3 from "../../assets/products/tshirt3.jpg";
import jacket2 from "../../assets/products/jacket2.jpg";
import hoodie5 from "../../assets/products/hoodie5.jpg";

const topRatedData = [
  {
    id: 1,
    title: "Starry Jacket",
    image: jacket1,
    price: "$60",
    description: "Top-rated Starry Night jacket with premium warmth.",
  },
  {
    id: 2,
    title: "Supernova Tee",
    image: tshirt3,
    price: "$29",
    description: "Stylish and comfortable supernova-themed t-shirt.",
  },
  {
    id: 3,
    title: "Retro Comic Jacket",
    image: jacket2,
    price: "$65",
    description: "Vintage vibes with comic-inspired designs.",
  },
  {
    id: 4,
    title: "Nebula Hoodie",
    image: hoodie5,
    price: "$52",
    description: "Stay cozy while traveling through galaxies.",
  },
];

const TopRated = ({ handleOrderPopup }) => {
  return (
    <section className="py-10 px-5 md:px-10 bg-[url('/assets/bg/starry_comic_bg.jpg')] bg-cover bg-center">
      <h2 className="text-3xl font-extrabold text-yellow-300 mb-6 text-center drop-shadow-lg">
        🌌 Top Rated
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topRatedData.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            description={item.description}
            onOrder={handleOrderPopup}
          />
        ))}
      </div>
    </section>
  );
};

export default TopRated;
