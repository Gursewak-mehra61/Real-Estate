import React, { useState , useEffect } from "react";
import { Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../services/firebase";
import { onAuthStateChanged , signOut } from "firebase/auth";
export default function Navbar() {
//   const user = null;
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [user, setUser] = useState(null);

const handleLogout = async () => {
  try {
    await signOut(auth);
    // Optionally navigate to login or home page after logout
    navigate("/login");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

  const handleNavClick = (item) => {
    setMobileMenuOpen(false); // Close mobile menu on navigation
    switch (item) {
      case "home":
        navigate("/");
        break;
      case "buy":
        navigate("/buy");
        break;
      case "rent":
        console.log("Rent page not implemented yet");
        break;
      case "sell":
        console.log("Sell page not implemented yet");
        break;
      case "about":
        console.log("About page not implemented yet");
        break;
      case "contact":
        console.log("Contact page not implemented yet");
        break;
      default:
        console.log(`Navigating to ${item}`);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const isActiveRoute = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);


  return (
    <nav className=" border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src="/img/logo.svg" alt="logo" />
          <span className="text-xl font-bold text-gray-900">PropBot</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium list-none m-0 p-0">
          {[
            { label: "Home", path: "/" },
            { label: "Buy", path: "/buy" },
            { label: "Rent", path: "/rent" },
            { label: "Sell", path: "/sell" },
            { label: "About Us", path: "/about" },
            { label: "Contact Us", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <button
                type="button"
                onClick={() => handleNavClick(item.label.toLowerCase())}
                className={`hover:text-blue-600 transition-colors duration-200 pb-1 ${
                  isActiveRoute(item.path)
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "border-b-2 border-transparent"
                } h-10 leading-10 text-base`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        {!user ? (
  <button
  onClick={handleLogin}
  style={{ backgroundColor: "#1E3A8A" }}
  className="hidden lg:flex text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center space-x-1"
>
  <span>Login / Register</span>
  <img src="/img/login-arrow-svg.svg" alt="arrow-svg" />
</button>
) : (
  <div className="hidden lg:flex items-center gap-4">
    <span className="text-blue-700 font-semibold">
      {user.displayName || user.email}
    </span>
    <button
      onClick={handleLogout}
      className="text-red-600 font-semibold hover:underline"
    >
      Logout
    </button>
  </div>
)}

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="lg:hidden mt-4 space-y-2 px-4">
          {[
            { label: "Home", path: "/" },
            { label: "Buy", path: "/buy" },
            { label: "Rent", path: "/rent" },
            { label: "Sell", path: "/sell" },
            { label: "About Us", path: "/about" },
            { label: "Contact Us", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <button
                type="button"
                onClick={() => handleNavClick(item.label.toLowerCase())}
                className={`block w-full text-left hover:text-blue-600 transition-colors duration-200 pb-1 ${
                  isActiveRoute(item.path)
                    ? "border-l-4 border-blue-600 pl-2 text-blue-600 font-semibold"
                    : ""
                } h-10 leading-10 text-base`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            {!user ? (
              <button
                onClick={handleLogin}
                style={{ backgroundColor: "#1E3A8A" }}
                className="w-full text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center space-x-1"
              >
                <span>Login / Register</span>
                <img src="/img/login-arrow-svg.svg" alt="arrow-svg" />
              </button>
            ) : (
              <span className="block text-blue-700 font-semibold">{user.email}</span>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
