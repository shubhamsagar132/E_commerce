import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import tshirt1 from "../../assets/products/women_tshirt1.jpg";
import tshirt2 from "../../assets/products/women_tshirt2.jpg";
import tshirt3 from "../../assets/products/women_tshirt3.jpg";
import tshirt4 from "../../assets/products/women_tshirt4.jpg";

const data = [
  {
    id: 1,
    title: "Galaxy Vibes Tee",
    image: tshirt1,
    price: "$27",
    description: "Starry graphic with glowing nebulae.",
  },
  {
    id: 2,
    title: "Comic Boom Tee",
    image: tshirt2,
    price: "$30",
    description: "Bright comic speech bubble print.",
  },
  {
    id: 3,
    title: "Van Gogh Swirl Tee",
    image: tshirt3,
    price: "$26",
    description: "Famous swirls with modern cuts.",
  },
  {
    id: 4,
    title: "Pop Art Splash",
    image: tshirt4,
    price: "$28",
    description: "Fun splash design in pop comic style.",
  },
];

const WomensTshirts = ({ handleOrderPopup }) => {
  return (
    <section className="py-10 px-5 md:px-10">
      <h2 className="text-3xl font-extrabold text-yellow-300 mb-6">
        Women's T-Shirts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
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

export default WomensTshirts;
