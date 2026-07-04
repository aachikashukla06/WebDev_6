import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import deliveryboy from "../assets/deliberyboy.png";
import api from "../config/api.config";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setUser, setIsLogin, isLogin } = useAuth();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., send loginData to the server
    //Validate loginData

    console.log("Login data submitted:", loginData);

    const payload = {
      email: loginData.email.toLowerCase(),
      password: loginData.password,
    };

    try {
      const res = await api.post("/auth/login", payload);
      toast.success(res.data.message);
      sessionStorage.setItem("UserData", JSON.stringify(res.data.data));
      setUser(res.data.data);
      // setIsLogin(true);
      navigate("/user/dashboard");
    } catch (error) {
      toast.error(
        error.response.status + " | " + error.response?.data?.message ||
          error.message,
      );
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border p-3 focus:ring-2 focus:ring-orange-500 outline-none";

  const PasswordInput = ({ loginData, handleChange }) => (
    <div>
      <label className="font-semibold">Password</label>
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        className={inputClass}
      />
    </div>
  );

  return (
  <div
    className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative w-full max-w-5xl grid md:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl backdrop-blur-md bg-white/10 border border-white/20">

      {/* Left Side */}
      <div className="hidden md:flex flex-col justify-center items-center text-white p-10">
        <img
          src={deliveryboy}
          alt="Delivery Boy"
          className="w-80 drop-shadow-2xl animate-"
        />

        <h1 className="text-5xl font-bold mt-6">
          🍕 Cravings
        </h1>

        <p className="text-center mt-4 text-lg text-gray-200">
          Delicious food delivered to your doorstep.
          <br />
          Login and satisfy your cravings!
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white/90 backdrop-blur-xl p-10 flex flex-col justify-center">

        <h2 className="text-4xl font-bold text-center mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Login to continue ordering your favourite meals.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Email */}
          <div>
            <label className="font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={inputClass}
            />
          </div>
          
          {/* Password */}

          <PasswordInput
            loginData={loginData}
            handleChange={handleChange}
          />

          {validateError && (
            <p className="text-red-500">
              {validateError}
            </p>
          )}

          <div className="flex justify-between text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-orange-600 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-3 rounded-xl font-semibold text-lg shadow-lg"
          >
            🍔 Login
          </button>

        </form>

        <div className="text-center mt-8 space-y-3">

          <p>
            Don't have an account?

            <button
              onClick={() => navigate("/register")}
              className="ml-2 text-orange-600 font-bold hover:underline"
            >
              Register
            </button>

          </p>

          <p>
            Need Help?

            <button
              onClick={() => navigate("/contact")}
              className="ml-2 text-orange-600 font-bold hover:underline"
            >
              Contact Us
            </button>

          </p>

        </div>

      </div>

    </div>
  </div>
);

};

export default Login;