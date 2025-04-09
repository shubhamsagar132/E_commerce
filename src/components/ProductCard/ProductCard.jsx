import React from "react";

const ProductCard = ({ title, image, price, handleOrderPopup }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          ₹{price}
        </p>
        <button
          onClick={handleOrderPopup}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
