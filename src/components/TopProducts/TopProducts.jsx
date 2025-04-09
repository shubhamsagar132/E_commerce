import React from "react";
import Img1 from "../../assets/shirt/oversized marvel.jpg";
import Img2 from "../../assets/shirt/acid wash.jpg";
import Img3 from "../../assets/shirt/graphic printed.jpg";
import Img4 from "../../assets/shirt/solid color.jpg";
import Img5 from "../../assets/shirt/polo t-shirts.jpg";
import Img6 from "../../assets/shirt/sleeveless.jpg";
import Img7 from "../../assets/shirt/long sleeve.jpg";
import Img8 from "../../assets/shirt/henley.jpg";
import Img9 from "../../assets/shirt/hooded.jpg";
import Img10 from "../../assets/shirt/crop tops(for women).jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Oversized",
    price: "$19.99",
    description: "Relaxed-fit oversized Marvel t-shirt for casual streetwear vibes.",
  },
  {
    id: 2,
    img: Img2,
    title: "Acid Wash",
    price: "$13.99",
    description: "Trendy acid-wash tee for a retro grunge look with comfort.",
  },
  {
    id: 3,
    img: Img3,
    title: "Graphic Printed",
    price: "$11.99",
    description: "Bold graphic prints to make a style statement effortlessly.",
  },
  {
    id: 4,
    img: Img4,
    title: "Solid Color",
    price: "$12.99",
    description: "Clean solid-color t-shirt perfect for minimalist fashion lovers.",
  },
  {
    id: 5,
    img: Img5,
    title: "Polo T-Shirts",
    price: "$14.99",
    description: "Smart-casual polo t-shirt with collar for everyday elegance.",
  },
  {
    id: 6,
    img: Img6,
    title: "Sleeveless",
    price: "$13.99",
    description: "Cool sleeveless design ideal for workouts and summer style.",
  },
  {
    id: 7,
    img: Img7,
    title: "Long Sleeve",
    price: "$18.99",
    description: "Stylish long-sleeve tee for cozy days and laid-back fashion.",
  },
  {
    id: 8,
    img: Img8,
    title: "Henley",
    price: "$19.99",
    description: "Classic Henley shirt with buttoned neckline for a rugged charm.",
  },
  {
    id: 9,
    img: Img9,
    title: "Hooded",
    price: "$21.99",
    description: "Comfy hooded tee that blends style and warmth perfectly.",
  },
  {
    id: 10,
    img: Img10,
    title: "Crop Tops (for women)",
    price: "$14.99",
    description: "Trendy cropped top designed for effortless feminine flair.",
  },
];


const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-14 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] w-full p-6"
            >
             {/* Image */}
<div className="h-[120px] mb-6">
  <img
    src={data.img}
    alt={data.title}
    className="max-w-[140px] block mx-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md"
  />
</div>

{/* Details */}
<div className="text-center mt-2">
  <div className="w-full flex items-center justify-center gap-1 mb-2">
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
  </div>
  <h1 className="text-xl font-bold">{data.title}</h1>
  <p className="font-semibold mt-2">{data.price}</p>
  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mt-2">
    {data.description}
  </p>
  <button
    onClick={handleOrderPopup}
    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
  >
    Order Now
  </button>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
