// src/components/ProductCard/BestSelling.jsx
import React from "react";
import ProductCard from "./ProductCard";

// ✅ Import images directly if they are inside src/assets
import hoodie1 from "../../assets/products/hoodie1.jpg";
import shirt1 from "../../assets/products/shirt1.jpg";
import tshirt1 from "../../assets/products/tshirt1.jpg";
import hoodie2 from "../../assets/products/hoodie2.jpg";

const bestSellingData = [
  {
    id: 1,
    title: "Comic Graphic Hoodie",
    image: hoodie1,
    price: "$45",
    description: "High-quality cotton blend hoodie with comic graphics.",
  },
  {
    id: 2,
    title: "Starry Night Shirt",
    image: shirt1,
    price: "$30",
    description: "Soft cotton shirt featuring Van Gogh’s Starry Night.",
  },
  {
    id: 3,
    title: "Superhero T-Shirt",
    image: tshirt1,
    price: "$25",
    description: "Bold and comfy superhero-themed tee for fans.",
  },
  {
    id: 4,
    title: "Space Galaxy Hoodie",
    image: hoodie2,
    price: "$50",
    description: "Explore the stars in this galaxy-printed hoodie.",
  },
];

const BestSelling = ({ handleOrderPopup }) => {
  return (
    <section className="py-10 px-5 md:px-10">
      <h2 className="text-3xl font-extrabold text-yellow-300 mb-6">Best Selling</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSellingData.map((item) => (
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

export default BestSelling;
