// src/components/ProductCard/TrendingProducts.jsx
import React from "react";
import ProductCard from "./ProductCard";

import hoodie3 from "../../assets/products/hoodie3.jpg";
import tshirt2 from "../../assets/products/tshirt2.jpg";
import hoodie4 from "../../assets/products/hoodie4.jpg";
import shirt2 from "../../assets/products/shirt2.jpg";

const trendingData = [
  {
    id: 1,
    title: "Heroic Hoodie",
    image: hoodie3,
    price: "$48",
    description: "Embrace your inner hero with this bold hoodie.",
  },
  {
    id: 2,
    title: "Van Gogh Tee",
    image: tshirt2,
    price: "$28",
    description: "A tribute to art lovers featuring starry aesthetics.",
  },
  {
    id: 3,
    title: "Comic Print Hoodie",
    image: hoodie4,
    price: "$46",
    description: "Retro comic print hoodie with vibrant colors.",
  },
  {
    id: 4,
    title: "Astronaut Shirt",
    image: shirt2,
    price: "$32",
    description: "Explore space fashion with this astronaut tee.",
  },
];

const TrendingProducts = ({ handleOrderPopup }) => {
  return (
    <section className="py-10 px-5 md:px-10 bg-[url('/assets/bg/starry_comic_bg.jpg')] bg-cover bg-center">
      <h2 className="text-3xl font-extrabold text-yellow-300 mb-6 text-center drop-shadow-lg">
        ⭐ Trending Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingData.map((item) => (
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

export default TrendingProducts;
