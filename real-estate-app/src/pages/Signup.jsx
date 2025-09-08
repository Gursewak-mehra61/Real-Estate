import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your full name.";
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      return "Please enter a valid email address.";
    }
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col mb-5">
      {/* Header */}
      <header className="flex items-center justify-between px-6 sm:px-10 py-5 bg-white border-b shadow-md ">
        <Link
          to="/"
          style={{ color: "#555555", border: "1px solid #1E3A8A" }}
          className="border px-6 py-2 rounded-full text-blue-700 font-semibold flex items-center gap-2 transition"
        >
          <span className="text-lg">
            <img src="/img/back-arr.svg" alt="back-arr" />
          </span>{" "}
          Back to Homepage
        </Link>

        <div className="flex items-center gap-2 select-none">
          <img src="/img/logo.svg" alt="logo" />
          <span className="font-bold text-lg tracking-wide">PropBot</span>
        </div>

        <Link
          to="/about"
          style={{ backgroundColor: "#1E3A8A" }}
          className="px-6 py-2 rounded-full text-white flex items-center gap-2 transition"
        >
          About Us <span className="ml-1"><img src="/img/login-arrow-svg.svg" alt="arrow" /></span>
        </Link>
      </header>

      {/* Main Section with responsive widths */}
      <main className="flex flex-col sm:flex-col md:flex-row w-full flex-grow mt-10">
        {/* Form Left - full width on mobile/tablet, 35% on desktop */}
        <section className="w-[90%] sm:w-full sm:max-w-full sm:px-6 flex flex-col justify-center mx-auto md:w-[35%] md:px-12 md:max-w-none md:mx-0 py-10 md:py-14 bg-white">
          <h1 className="text-3xl font-extrabold mb-8 text-center">Create new account</h1>
          {error && <p className="mb-6 text-red-600 font-medium text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-base font-semibold mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                style={{ border: '1px solid #1E3A8A' }}
                placeholder="Enter Your Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border-2 rounded-xl px-5 py-3 text-base focus:outline-none transition shadow-[2px_2px_12px_0px_#00000029]"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-base font-semibold mb-2" htmlFor="email">Email Address</label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  style={{ border: '1px solid #1E3A8A' }}
                  placeholder="Enter Your Email Id"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-2 rounded-xl px-5 py-3 text-base w-full focus:outline-none transition pr-10 shadow-[2px_2px_12px_0px_#00000029]"
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">
                  <img src="/img/email.svg" alt="email-svg" />
                </span>
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-base font-semibold mb-2" htmlFor="password">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  style={{ border: '1px solid #1E3A8A' }}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border-2 rounded-xl px-5 py-3 text-base w-full focus:outline-none transition pr-10 shadow-[2px_2px_12px_0px_#00000029]"
                  required
                />
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer"
                  onClick={() => setShowPassword(s => !s)}
                >
                  <img src="/img/password-eye.svg" alt="show password svg" />
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="text-base font-semibold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  style={{ border: '1px solid #1E3A8A' }}
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Your Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border-2 rounded-xl px-5 py-3 text-base w-full focus:outline-none transition pr-10 shadow-[2px_2px_12px_0px_#00000029]"
                  required
                />
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer"
                  onClick={() => setShowConfirm(s => !s)}
                >
                  <img src="/img/password-eye.svg" alt="show password svg" />
                </span>
              </div>
            </div>

            {/* Create Account Btn */}
            <button
              type="submit"
              style={{ backgroundColor: "#1E3A8A", borderRadius: '34px' }}
              className="mt-4 w-full text-white py-4 text-lg shadow transition"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-10 text-center text-base text-gray-800">
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#1E3A8A" }} className="font-bold hover:underline">
              Log In
            </Link>
          </p>
        </section>

        {/* Right - Image */}
        <section className="w-[90%] sm:w-full sm:max-w-full sm:px-6 p-6 mx-auto md:w-[65%] md:p-0 md:max-w-none md:mx-0 flex items-center justify-center">
          <img
            src="/img/signup-img.jpg"
            alt="Modern house"
            className="object-cover w-full h-full rounded-[34px]"
          />
        </section>
      </main>
    </div>
  );
}
