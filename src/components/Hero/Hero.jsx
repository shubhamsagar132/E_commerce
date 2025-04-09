import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "His life will forever be changed... Grab deals before they vanish like stardust!",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Style, sparkle, and stardust ✨ – shop your favorite comic hero looks today!",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on All Products Sale",
    description:
      "Unleash your superhero style – limited time cosmic clearance!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex justify-center items-center">
      {/* Starry swirl background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/starry-bg.png')] bg-cover bg-center opacity-30 mix-blend-screen z-0 animate-pulse-slow"></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0 z-10">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                {/* Text content section */}
                <div className="flex flex-col justify-center gap-5 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 px-4">
                  <h1
                    data-aos="zoom-out"
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-400 drop-shadow-[2px_2px_0_#000]"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    className="text-sm sm:text-base text-blue-200"
                  >
                    {data.description}
                  </p>
                  <div data-aos="fade-up">
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-tr from-yellow-400 to-red-500 hover:scale-110 transform transition duration-300 text-black font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-yellow-500/50"
                    >
                      ⚡ Order Now
                    </button>
                  </div>
                </div>

                {/* Image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    className="relative group transition-transform duration-500"
                  >
                    <img
                      src={data.img}
                      alt="hero"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto transform group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-yellow-500/30 duration-500 ease-in-out"
                    />
                    {/* Comic-style spark effect */}
                    <span className="absolute top-2 right-2 text-yellow-300 text-xl font-comic animate-ping-slow">
                      💥
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
