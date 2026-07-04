import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUtensils } from "react-icons/fa";
import api from "../config/api.config.js";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, setUser, isLogin, setIsLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");

      sessionStorage.removeItem("UserData");

      setIsLogin(false);
      setUser(false);

      navigate("/");

      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        error.response?.status +
          " | " +
          error.response?.data?.message || error.message
      );
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 shadow-lg border-b border-white/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 text-3xl font-bold text-orange-600 hover:scale-105 transition duration-300"
        >
          <FaUtensils className="text-4xl animate-pulse" />

          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Cravings
          </span>
        </Link>

        {/* Navigation */}

        <div className="flex items-center gap-8 font-medium text-gray-700">
          <Link
            to="/"
            className="relative group transition duration-300"
          >
            Home

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/contact-us"
            className="relative group transition duration-300"
          >
            Contact

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {isLogin ? (
            <div className="flex items-center gap-4 pl-6 border-l border-gray-300">
              <img
                src={user.photo}
                alt=""
                className="w-11 h-11 rounded-full object-cover border-2 border-orange-500 shadow-md hover:scale-110 transition duration-300"
              />

              <Link
                to="/user/dashboard"
                className="font-semibold text-gray-800 hover:text-orange-600 transition"
              >
                {user.fullName}
              </Link>

              <button
                onClick={handleLogout}
                className="p-2 rounded-full bg-red-100 hover:bg-red-500 hover:text-white text-red-500 transition-all duration-300 hover:rotate-12"
              >
                <AiOutlineLogout size={22} />
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/login"
                className="px-5 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;