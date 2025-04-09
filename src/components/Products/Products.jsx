import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

// Product data array
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm text-primary"
          >
            Top Selling Products for you
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold text-yellow-400 drop-shadow-[2px_2px_0_#000]"
          >
            Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-400"
          >
            Check out our top picks from the latest trends. Style that speaks!
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {ProductsData.map((product) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={product.aosDelay}
              className="space-y-3 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-yellow-400/30 hover:scale-105 transition duration-300 p-3"
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
              />
              <div className="text-center">
                <h3 className="font-semibold text-lg text-primary dark:text-yellow-300">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {product.color}
                </p>
                <div className="flex justify-center items-center gap-1 text-yellow-400">
                  <FaStar />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="mt-10 cursor-pointer bg-gradient-to-r from-yellow-400 to-red-500 text-black font-semibold py-2 px-6 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
            🌟 View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
