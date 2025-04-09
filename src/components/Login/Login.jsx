import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      alert("Login successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      const message =
        err.response?.data?.message || err.message || "Login failed!";
      alert("Login failed: " + message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-black text-white px-4 py-12">
      <div className="max-w-md w-full bg-slate-900 bg-opacity-70 p-8 rounded-3xl shadow-2xl transform transition duration-500 hover:scale-[1.02] border border-indigo-400">
        <h2 className="text-3xl font-bold mb-6 text-yellow-300 text-center drop-shadow-md comic-font">
          Login to Save the Galaxy 🦸‍♂️
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="you@starverse.com"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full p-3 rounded-xl bg-slate-800 text-white border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            onChange={handleChange}
            value={formData.password}
            required
            className="w-full p-3 rounded-xl bg-slate-800 text-white border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold py-2 rounded-xl mt-4 shadow-lg hover:shadow-yellow-500/50 transition duration-300"
          >
            Enter the Heroverse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;