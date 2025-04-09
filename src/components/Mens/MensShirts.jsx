import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import shirt1 from "../../assets/products/men_shirt1.jpg";
import shirt2 from "../../assets/products/men_shirt2.jpg";
import shirt3 from "../../assets/products/men_shirt3.jpg";
import shirt4 from "../../assets/products/men_shirt4.jpg";

const MensShirts = ({ handleOrderPopup }) => {
  const products = [
    { id: 1, title: "Formal Comic Shirt", price: 899, image: shirt1 },
    { id: 2, title: "Men's Check Shirt", price: 999, image: shirt2 },
    { id: 3, title: "Dark Mode Shirt", price: 1099, image: shirt3 },
    { id: 4, title: "Bright Pop Shirt", price: 949, image: shirt4 },
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} handleOrderPopup={handleOrderPopup} />
      ))}
    </div>
  );
};

export default MensShirts;
