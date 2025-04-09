import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import kids_tshirt1 from "../../assets/products/kid_tshirt1.jpg";
import kids_tshirt2 from "../../assets/products/kid_tshirt2.jpg";
import kids_tshirt3 from "../../assets/products/kid_tshirt3.jpg";
import kids_tshirt4 from "../../assets/products/kid_tshirt4.jpg";

const KidsTshirts = ({ handleOrderPopup }) => {
  const products = [
    { id: 1, title: "Kids Hero Tee", image: kids_tshirt1, price: 499 },
    { id: 2, title: "Cute Star Tee", image: kids_tshirt2, price: 549 },
    { id: 3, title: "Cartoon Printed Tee", image: kids_tshirt3, price: 599 },
    { id: 4, title: "Avenger Kids Tee", image: kids_tshirt4, price: 649 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} handleOrderPopup={handleOrderPopup} />
      ))}
    </div>
  );
};

export default KidsTshirts;
