import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Absolutely loved the design and quality! Felt like a superhero myself wearing this. Highly recommended!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "The UI and performance of this store are top-notch. Smooth, fun, and full of personality!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Superb collection! Looks even better in person. Delivery was lightning fast ⚡.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Love the starry vibe. It's like fashion meets fantasy — perfectly executed!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-16 bg-slate-900 text-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-yellow-400">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-white">
            ⭐ Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hear it from our fashion-forward heroes who’ve experienced the magic.
          </p>
        </div>

        {/* Slider */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="px-3">
                <div className="bg-white/10 backdrop-blur-md border-2 border-yellow-400 rounded-2xl p-6 shadow-md relative min-h-[280px] flex flex-col items-center text-center gap-4">
                  <FaQuoteLeft className="text-yellow-400 text-3xl absolute top-4 left-4 opacity-60" />
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-md"
                  />
                  <p className="text-sm text-slate-300 italic">{data.text}</p>
                  <h3 className="text-lg font-semibold text-yellow-300 drop-shadow-sm">{data.name}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
