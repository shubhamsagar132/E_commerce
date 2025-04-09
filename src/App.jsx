import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core Layout
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

// Home Page Sections
import Hero from "./components/Hero/Hero";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";

// Auth Pages
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

// Product Categories
import TrendingProducts from "./components/ProductCard/TrendingProducts";
import BestSelling from "./components/ProductCard/BestSelling";
import TopRated from "./components/ProductCard/TopRated";

// Women Products
import WomensTshirts from "./components/Womens/WomensTshirts";
import WomensCropTops from "./components/Womens/WomensCropTops";
import WomensShirts from "./components/Womens/WomensShirts";

// Men Products
import MensTshirts from "./components/Mens/MensTshirts";
import MensShirts from "./components/Mens/MensShirts";
import MensHoodies from "./components/Mens/MensHoodies";

// Kids Products
import KidsTshirts from "./components/Kids/KidsTshirts";
import KidsShirts from "./components/Kids/KidsShirts";
import KidsHoodies from "./components/Kids/KidsHoodies";

// Animation Library
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup((prev) => !prev);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Router>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Banner />
                <Subscribe />
                <Testimonials />
              </>
            }
          />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* General Product Categories */}
          <Route
            path="/trending"
            element={<TrendingProducts handleOrderPopup={handleOrderPopup} />}
          />
          <Route
            path="/bestselling"
            element={<BestSelling handleOrderPopup={handleOrderPopup} />}
          />
          <Route
            path="/toprated"
            element={<TopRated handleOrderPopup={handleOrderPopup} />}
          />

          {/* Women */}
          <Route path="/womens/tshirts" element={<WomensTshirts handleOrderPopup={handleOrderPopup} />} />
          <Route path="/womens/croptops" element={<WomensCropTops handleOrderPopup={handleOrderPopup} />} />
          <Route path="/womens/shirts" element={<WomensShirts handleOrderPopup={handleOrderPopup} />} />

          {/* Men */}
          <Route path="/mens/tshirts" element={<MensTshirts handleOrderPopup={handleOrderPopup} />} />
          <Route path="/mens/shirts" element={<MensShirts handleOrderPopup={handleOrderPopup} />} />
          <Route path="/mens/hoodies" element={<MensHoodies handleOrderPopup={handleOrderPopup} />} />

          {/* Kids */}
          <Route path="/kids/tshirts" element={<KidsTshirts handleOrderPopup={handleOrderPopup} />} />
          <Route path="/kids/shirts" element={<KidsShirts handleOrderPopup={handleOrderPopup} />} />
          <Route path="/kids/hoodies" element={<KidsHoodies handleOrderPopup={handleOrderPopup} />} />
        </Routes>

        {/* Global Components */}
        <Footer />
        {orderPopup && <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />}
      </Router>
    </div>
  );
};

export default App;
