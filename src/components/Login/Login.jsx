import React, { useContext, useState } from "react";
import loginImg from "../../assets/others/authentication2.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");       // ✅ added state
  const [password, setPassword] = useState(""); // ✅ added state
  const navigate = useNavigate()

  const { login } = useContext(AuthContext);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  function generateCaptcha() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (let i = 0; i < 6; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  }

  const reloadCaptcha = () => {
    setCaptcha(generateCaptcha());
    setUserInput("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput !== captcha) {
      setError("❌ Captcha does not match!");
      return;
    }
    setError("");

    try {
      const res = await fetch(`${apiBaseUrl}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.user, data.token);
        navigate("/")
        toast.success(data.message);
      } else {
        toast.error(data.error);
      }
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="md:mx-40 h-screen flex items-center">
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center bg-[#F3F3F3] shadow-md px-16 py-16">
        <div className="leftImg">
          <motion.img
            src={loginImg}
            alt="Login"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="rightForm">
          <h2 className="text-3xl font-semibold text-center mb-5">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full bg-white"
                value={email}                         // ✅ controlled input
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full bg-white"
                value={password}                      // ✅ controlled input
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Captcha */}
            <div className="form-control w-full ">
              <div className="flex items-center justify-between">
                <div className="text-lg italic tracking-widest border px-3 py-2 rounded bg-gray-100">
                  {captcha}
                </div>
                <button
                  type="button"
                  onClick={reloadCaptcha}
                  className="ml-2 text-blue-600 hover:underline"
                >
                  Reload
                </button>
              </div>
              <input
                type="text"
                placeholder="Enter Captcha"
                className="input input-bordered w-full mt-2 bg-white"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit */}
            <button type="submit" className="btn bg-[#D1A054] w-full">
              Login
            </button>

            <Link
              to="/register"
              className="text-sm text-center hover:text-yellow-500 link link-hover block"
            >
              New here? Create new account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
