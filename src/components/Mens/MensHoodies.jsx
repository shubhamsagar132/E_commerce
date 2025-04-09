// MensHoodies.jsx
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import hoodie1 from "../../assets/products/men_hoodie1.jpg";
import hoodie2 from "../../assets/products/men_hoodie2.jpg";
import hoodie3 from "../../assets/products/men_hoodie3.jpg";
import hoodie4 from "../../assets/products/men_hoodie4.jpg";

const MensHoodies = ({ handleOrderPopup }) => {
  const products = [
    { id: 1, title: "Hero Hoodie", price: 1199, image: hoodie1 },
    { id: 2, title: "Galaxy Hoodie", price: 1299, image: hoodie2 },
    { id: 3, title: "Comic Punch Hoodie", price: 1249, image: hoodie3 },
    { id: 4, title: "Classic Grey Hoodie", price: 1149, image: hoodie4 },
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} handleOrderPopup={handleOrderPopup} />
      ))}
    </div>
  );
};

export default MensHoodies;
