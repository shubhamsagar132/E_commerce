import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gradient-to-br from-slate-800 to-gray-900 text-white py-14"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-yellow-400 shadow-lg">
          <h1
            className="text-3xl sm:text-4xl font-bold text-yellow-300 drop-shadow-[2px_2px_0_#000] mb-6"
            data-aos="fade-up"
          >
            ✨ Get Notified About New Products
          </h1>

          <div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            data-aos="fade-up"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[70%] px-4 py-3 rounded-full border-2 border-blue-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-slate-800 dark:text-white placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold px-6 py-3 rounded-full hover:scale-105 hover:shadow-md transition-all duration-300">
              🚀 Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
