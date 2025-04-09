import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOrderPopup(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setOrderPopup]);

  return (
    <>
      {orderPopup && (
        <div
          className="popup"
          role="dialog"
          aria-modal="true"
          aria-label="Order Form Popup"
        >
          <div className="fixed inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e293b] bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 w-[90%] max-w-md relative border-4 border-yellow-400 transition-all duration-300">
              {/* Close Button */}
              <button
                onClick={() => setOrderPopup(false)}
                aria-label="Close Order Form"
                className="absolute top-3 right-3 text-2xl text-yellow-400 hover:text-red-500 transition duration-200"
              >
                <IoCloseOutline />
              </button>

              {/* Header */}
              <h1 className="text-center text-3xl font-bold text-yellow-400 drop-shadow-[2px_2px_0_#000] mb-6">
                ⚡ Order Now
              </h1>

              {/* Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-full border-2 border-blue-300 px-4 py-2 bg-white dark:bg-slate-800 text-black dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-full border-2 border-blue-300 px-4 py-2 bg-white dark:bg-slate-800 text-black dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="text"
                  placeholder="Address"
                  required
                  className="w-full rounded-full border-2 border-blue-300 px-4 py-2 bg-white dark:bg-slate-800 text-black dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-tr from-yellow-400 to-red-500 text-black font-bold px-6 py-2 rounded-full hover:scale-105 hover:shadow-yellow-500/50 shadow-md transition-transform duration-300"
                  >
                    🚀 Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
