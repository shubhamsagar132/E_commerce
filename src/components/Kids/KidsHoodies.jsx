import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import kids_hoodie1 from "../../assets/products/kid_hoodie1.jpg";
import kids_hoodie2 from "../../assets/products/kid_hoodie2.jpg";
import kids_hoodie3 from "../../assets/products/kid_hoodie3.jpg";
import kids_hoodie4 from "../../assets/products/kid_hoodie4.jpg";

const KidsHoodies = ({ handleOrderPopup }) => {
  const products = [
    { id: 1, title: "Superhero Hoodie", image: kids_hoodie1, price: 899 },
    { id: 2, title: "Cartoon Hoodie", image: kids_hoodie2, price: 949 },
    { id: 3, title: "Space Hoodie", image: kids_hoodie3, price: 999 },
    { id: 4, title: "Marvel Hoodie", image: kids_hoodie4, price: 1049 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} handleOrderPopup={handleOrderPopup} />
      ))}
    </div>
  );
};

export default KidsHoodies;
