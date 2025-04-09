import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/register", // ✅ Updated port
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      alert("Signup successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      const message =
        err.response?.data?.message || err.message || "Network Error";
      alert("Signup failed: " + message);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-indigo-900 to-blue-800 text-white px-4 py-12">
      <div className="max-w-md w-full bg-slate-900 bg-opacity-70 p-8 rounded-3xl shadow-2xl transform transition duration-500 hover:scale-[1.02] border border-pink-400">
        <h2 className="text-3xl font-bold mb-6 text-pink-300 text-center drop-shadow comic-font">
          Join the League 💥
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Super Coder"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-slate-800 text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            placeholder="hero@universe.com"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-slate-800 text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-slate-800 text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 to-yellow-300 text-black font-bold py-2 rounded-xl mt-4 shadow-lg hover:shadow-pink-400/50 transition duration-300"
          >
            Become a Superhero
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
