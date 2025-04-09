import React from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Kids",
    link: "#",
    subMenu: [
      { id: 1, name: "T-Shirts", link: "/kids/tshirts" },
      { id: 2, name: "Shirts", link: "/kids/shirts" },
      { id: 3, name: "Hoodies", link: "/kids/hoodies" },
    ],
  },
  {
    id: 3,
    name: "Mens",
    link: "#",
    subMenu: [
      { id: 1, name: "T-Shirts", link: "/mens/tshirts" },
      { id: 2, name: "Shirts", link: "/mens/shirts" },
      { id: 3, name: "Hoodies", link: "/mens/hoodies" },
    ],
  },
  {
    id: 4,
    name: "Womens",
    link: "#",
    subMenu: [
      { id: 1, name: "T-Shirts", link: "/womens/tshirts" },
      { id: 2, name: "Crop Tops", link: "/womens/croptops" },
      { id: 3, name: "Shirts", link: "/womens/shirts" },
    ],
  },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/trending" },
  { id: 2, name: "Best Selling", link: "/bestselling" },
  { id: 3, name: "Top Rated", link: "/toprated" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-gradient-to-br from-indigo-900 via-purple-900 to-black dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-white duration-200 relative z-40">
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 dark:from-slate-800 dark:to-slate-900 py-2 border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            to="/"
            className="font-extrabold text-2xl text-yellow-300 drop-shadow-glow flex items-center gap-2 tracking-wider hover:scale-105 transition-transform"
          >
            <FiShoppingBag size={30} />
            ZapNStyle
          </Link>

          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-yellow-400/50 py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-black/30 dark:bg-white/10 dark:border-white/30 dark:text-white text-white placeholder:text-white/70"
              />
              <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-yellow-300 group-hover:text-white" />
            </div>

            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-br from-yellow-300 to-red-500 text-black font-bold py-1 px-4 rounded-full flex items-center gap-2 group shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <span className="hidden group-hover:block transition-all duration-300">
                Order
              </span>
              <FaCartShopping className="text-xl drop-shadow-glow" />
            </button>

            <div className="hidden sm:flex items-center gap-3 mr-4">
              <Link
                to="/login"
                className="text-sm font-extrabold text-yellow-300 hover:text-white transition-all duration-200 drop-shadow-glow hover:scale-110"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm font-extrabold text-yellow-300 hover:text-white transition-all duration-200 drop-shadow-glow hover:scale-110"
              >
                Sign Up
              </Link>
            </div>

            <DarkMode />
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="flex justify-center bg-black/30 dark:bg-white/10 py-2">
        <ul className="sm:flex hidden items-center gap-6">
          {Menu.map((item) => (
            <li key={item.id} className="relative group cursor-pointer">
              <Link
                to={item.link}
                className="inline-block px-4 py-2 text-yellow-100 dark:text-white hover:text-yellow-300 dark:hover:text-yellow-400 hover:scale-105 transition-all duration-200 flex items-center gap-1"
              >
                {item.name}
                {item.subMenu && (
                  <FaCaretDown className="mt-1 group-hover:rotate-180 transition duration-300" />
                )}
              </Link>

              {item.subMenu && (
                <div className="absolute hidden group-hover:block bg-black/90 dark:bg-white/10 backdrop-blur-md text-white mt-1 w-48 rounded-md shadow-lg z-50 border border-yellow-500/30 dark:border-white/20">
                  <ul>
                    {item.subMenu.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          to={sub.link}
                          className="block px-4 py-2 hover:bg-yellow-300/20 dark:hover:bg-white/20 rounded-md transition"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <span className="flex items-center gap-1 py-2 px-4 text-yellow-100 dark:text-white hover:text-yellow-300 dark:hover:text-yellow-400">
              Trending Products
              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute hidden group-hover:block bg-black/90 dark:bg-white/10 backdrop-blur-md text-white mt-1 w-48 rounded-md shadow-lg z-50 border border-yellow-500/30 dark:border-white/20">
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="block px-4 py-2 hover:bg-yellow-300/20 dark:hover:bg-white/20 rounded-md transition"
                    >
                      {item.name}
                    </Link>
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
