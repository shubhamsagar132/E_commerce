import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import kids_shirt1 from "../../assets/products/kid_shirt1.jpg";
import kids_shirt2 from "../../assets/products/kid_shirt2.jpg";
import kids_shirt3 from "../../assets/products/kid_shirt3.jpg";
import kids_shirt4 from "../../assets/products/kid_shirt4.jpg";

const KidsShirts = ({ handleOrderPopup }) => {
  const products = [
    { id: 1, title: "Formal Shirt", image: kids_shirt1, price: 699 },
    { id: 2, title: "Printed Shirt", image: kids_shirt2, price: 749 },
    { id: 3, title: "Casual Shirt", image: kids_shirt3, price: 799 },
    { id: 4, title: "Star Wars Shirt", image: kids_shirt4, price: 849 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} handleOrderPopup={handleOrderPopup} />
      ))}
    </div>
  );
};

export default KidsShirts;
