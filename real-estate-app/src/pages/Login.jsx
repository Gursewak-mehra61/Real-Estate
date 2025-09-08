import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";

const AppleIcon = () => <img src="/img/apple-logo.svg" alt="apple icon" />;
const FacebookIcon = () => <img src="/img/fb-logo.svg" alt="facebook icon" />;
const GoogleIcon = () => <img src="/img/google-logo.svg" alt="google icon" />;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.includes("@") || !email.includes(".")) {
      return "Please enter a valid email address.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
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
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Try again.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col mb-5">
      {/* Header */}
    <header className="w-full py-6 px-4 bg-white border-b shadow-md">

        <div className="flex flex-col items-center gap-4 sm:flex-row  md:justify-between md:items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="border border-[#1E3A8A] rounded-full px-6 py-2 font-semibold flex items-center gap-2 text-[#1E3A8A] bg-white text-base md:text-lg"
          >
            <img src="/img/back-arr.svg" alt="back" className="w-5 h-5" />
            <span>Back to Homepage</span>
          </Link>
          <div className="flex items-center gap-2">
            <img src="/img/logo.svg" alt="logo" className="w-8 h-8" />
            <span className="font-bold text-2xl tracking-wide">PropBot</span>
          </div>
          <Link
            to="/about"
            className="rounded-full px-6 py-2 bg-[#1E3A8A] text-white flex items-center gap-2 text-base md:text-lg"
          >
            About Us <img src="/img/login-arrow-svg.svg" alt="arrow" className="w-5 h-5" />
          </Link>
        </div>
      </header>

      {/* Main Section with tablet specific stack and full width */}
      <main className="flex flex-col sm:flex-col md:flex-row w-full flex-grow mt-10">
        {/* Login form with full width on tablet */}
        <section className="w-[90%] sm:w-full sm:max-w-full sm:px-6 flex flex-col justify-center mx-auto md:w-[35%] md:px-12 md:max-w-none md:mx-0 py-10 md:py-14">
          <h1 className="text-3xl font-extrabold mb-8 text-center">Log In</h1>
          {error && <p className="mb-4 text-red-600 font-medium text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-base font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email Id"
                  value={email}
                  style={{ border: "1px solid #1E3A8A" }}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-blue-700 rounded-xl px-4 py-3 text-base w-full focus:outline-none transition pr-10"
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2">
                  <img src="/img/email.svg" alt="email-svg" />
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-base font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPwd ? "text" : "password"}
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ border: "1px solid #1E3A8A" }}
                  className="border-2 rounded-xl px-4 py-3 text-base w-full focus:outline-none transition pr-10"
                  required
                />
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPwd((s) => !s)}
                  title={showPwd ? "Hide password" : "Show password"}
                >
                  <img src="/img/password-eye.svg" alt="show password svg" />
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-2 mb-2 gap-4 sm:gap-0">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  style={{ width: "19px", height: "19px" }}
                  onChange={() => setRememberMe((v) => !v)}
                  className="mr-2"
                />
                <label
                  htmlFor="rememberMe"
                  style={{ color: "#454343", fontSize: "12px" }}
                >
                  Remember Me
                </label>
              </div>
              <Link
                to="/forgot-password"
                style={{ color: "#A81212", fontSize: "12px" }}
                className="hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              style={{ backgroundColor: "#1E3A8A", borderRadius: "34px" }}
              className="w-full text-white py-4 text-lg shadow transition mt-2"
            >
              Log In
            </button>
          </form>

          <div className="my-8 flex flex-col items-center w-full max-w-xs mx-auto">
            <div className="flex items-center text-gray-500 w-full">
              <div className="flex-1 h-px bg-gray-300" />
              <span style={{ fontSize: "12px" }} className="px-4">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="flex items-center gap-8 mt-6">
              <button>
                <AppleIcon />
              </button>
              <button>
                <FacebookIcon />
              </button>
              <button>
                <GoogleIcon />
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-base text-gray-800">
            Doesn’t have an account?{" "}
            <Link
              to="/signup"
              style={{ color: "#1E3A8A" }}
              className="font-bold hover:underline"
            >
              Create One
            </Link>
          </p>
        </section>

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
