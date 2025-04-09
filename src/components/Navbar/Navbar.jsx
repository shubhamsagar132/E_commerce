import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "kids", link: "/#services" },
  { id: 3, name: "Mens", link: "/#" },
  { id: 4, name: "Womens", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-gradient-to-br from-indigo-900 via-purple-900 to-black dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-white duration-200 relative z-40">
      {/* Top Navbar */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 dark:from-slate-800 dark:to-slate-900 py-2 border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="font-extrabold text-2xl text-yellow-300 drop-shadow-glow flex items-center gap-2 tracking-wider hover:scale-105 transition-transform"
          >
            <FiShoppingBag size={30} />
            ZapNStyle
          </a>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-yellow-400/50 py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-black/30 dark:bg-white/10 dark:border-white/30 dark:text-white text-white placeholder:text-white/70"
              />
              <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-yellow-300 group-hover:text-white" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-br from-yellow-300 to-red-500 text-black font-bold py-1 px-4 rounded-full flex items-center gap-2 group shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <span className="hidden group-hover:block transition-all duration-300">
                Order
              </span>
              <FaCartShopping className="text-xl drop-shadow-glow" />
            </button>

            {/* Login/Signup Links */}
            <div className="hidden sm:flex items-center gap-3 mr-4">
              <a
                href="/login"
                className="text-sm font-extrabold text-yellow-300 hover:text-white transition-all duration-200 drop-shadow-glow hover:scale-110"
              >
                Login
              </a>
              <a
                href="/signup"
                className="text-sm font-extrabold text-yellow-300 hover:text-white transition-all duration-200 drop-shadow-glow hover:scale-110"
              >
                Sign Up
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div data-aos="zoom-in" className="flex justify-center bg-black/30 dark:bg-white/10 py-2">
        <ul className="sm:flex hidden items-center gap-6">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="inline-block px-4 py-2 text-yellow-100 dark:text-white hover:text-yellow-300 dark:hover:text-yellow-400 hover:scale-105 transition-all duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Dropdown Menu */}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-1 py-2 px-4 text-yellow-100 dark:text-white hover:text-yellow-300 dark:hover:text-yellow-400"
            >
              Trending Products
              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute hidden group-hover:block bg-black/90 dark:bg-white/10 backdrop-blur-md text-white mt-1 w-48 rounded-md shadow-lg z-50 border border-yellow-500/30 dark:border-white/20">
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="block px-4 py-2 hover:bg-yellow-300/20 dark:hover:bg-white/20 rounded-md transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
