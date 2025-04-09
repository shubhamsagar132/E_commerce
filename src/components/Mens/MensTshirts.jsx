import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import tshirt1 from "../../assets/products/men_tshirt1.jpg";
import tshirt2 from "../../assets/products/men_tshirt2.jpg";
import tshirt3 from "../../assets/products/men_tshirt3.jpg";
import tshirt4 from "../../assets/products/men_tshirt4.jpg";

const MensTshirts = ({ handleOrderPopup }) => {
  const products = [
    { id: 1, title: "Men's Comic Tee", price: 499, image: tshirt1 },
    { id: 2, title: "Superhero Style Tee", price: 599, image: tshirt2 },
    { id: 3, title: "Retro Comic Print Tee", price: 699, image: tshirt3 },
    { id: 4, title: "Starry Graphic Tee", price: 549, image: tshirt4 },
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} handleOrderPopup={handleOrderPopup} />
      ))}
    </div>
  );
};

export default MensTshirts;
