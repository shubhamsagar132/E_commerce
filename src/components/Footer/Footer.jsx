import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              <FiShoppingBag size="30" />
              ShopMe
            </h1>
            <p>
              Welcome to ShopMe — where the stars align with superhero style! From cosmic cool to comic-book bold, gear up in outfits that make you feel *super*.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-violet-500 hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Explore
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-violet-500 hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* social links */}
            <div className="py-8 px-4">
              <div className="flex items-center gap-3 mt-6">
                <a href="#"><FaInstagram className="text-3xl" /></a>
                <a href="#"><FaFacebook className="text-3xl" /></a>
                <a href="#"><FaLinkedin className="text-3xl" /></a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaMapLocationDot />
                  <p>Bhopal, Madhya Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoCall />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
