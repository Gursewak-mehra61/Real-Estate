import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("For Rent");
  const [houseType, setHouseType] = useState("House");
  const [country, setCountry] = useState("Indonesia");
  const navigate = useNavigate();

  const heroImageUrl = "/img/hero-img.jpg";

  const handleSearch = () => {
    if (!location.trim()) {
      alert("Please enter a location to search");
      return;
    }
    const query = {
      location: location.trim(),
      propertyType,
      houseType,
      country,
    };
    navigate("/buy", { state: query });
  };

  const handleListProperty = () => {
    navigate("/login");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="w-full mx-auto">
      {/* Hero Image and Overlay */}
      <div className="relative rounded-2xl overflow-hidden mt-10">
        <img
          src={heroImageUrl}
          alt="Dream Home"
          className="w-full h-[400px] md:h-[527px] object-cover rounded-2xl object-[center_20%]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl" />

        {/* Heading and Subtitle */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full text-center px-6">
          <h1 className="text-white font-extrabold text-3xl md:text-4xl">
            Find Your Dream Home in One Click!
          </h1>
          <p className="text-white/90 mt-2 text-base md:text-lg font-medium">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
        </div>

        {/* Search Bar and List Property Button */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-5xl flex flex-col md:flex-row justify-between items-center px-6 gap-4 z-20">
          {/* Search bar */}
          <div
            className="flex items-center bg-white h-12 px-5 shadow-md w-full md:w-[600px]"
            style={{ borderRadius: "12px" }}
          >
            <img
              src="/img/search-location.svg"
              alt="location"
              className="w-8 h-8 ml-2"
            />
            <input
              type="text"
              placeholder="Search Location..."
              className="flex-grow outline-none text-gray-700 font-medium placeholder:text-gray-400 bg-transparent"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch} aria-label="search">
              <img
                src="/img/search.svg"
                alt="search"
                className="w-10 h-10 -ml-2"
              />
            </button>
          </div>

          {/* List Property Button */}
          <button
            onClick={handleListProperty}
            style={{
              border: "2px solid #1E3A8A",
              color: "#1E3A8A",
              backgroundColor: "#FFFFFF",
              fontWeight: "400",
            }}
            className="border rounded-full px-5 h-12 hover:bg-blue-700 hover:text-white transition shadow-md bg-white w-full md:w-auto"
          >
            List Your Property
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-transparent md:bg-white rounded-full flex flex-col md:flex-row justify-between items-center gap-4 mt-[-40px] px-4 md:px-10 py-4 max-w-5xl mx-auto w-full shadow-lg z-20 relative">
  {/* For Rent Option */}
  <div className="relative w-full md:w-[220px] h-[56px]">
    <img
      src="/img/rent.svg"
      alt="rent"
      className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
    />
    <select
      value={propertyType}
      onChange={(e) => setPropertyType(e.target.value)}
      className="appearance-none w-full h-full bg-white border border-gray-300 rounded-full pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400"
    >
      <option>For Rent</option>
      <option>For Sale</option>
      <option>For Lease</option>
    </select>
    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
  </div>

  {/* House Option */}
  <div className="relative w-full md:w-[220px] h-[56px]">
    <img
      src="/img/house.svg"
      alt="house"
      className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
    />
    <select
      value={houseType}
      onChange={(e) => setHouseType(e.target.value)}
      className="appearance-none w-full h-full bg-white border border-gray-300 rounded-full pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400"
    >
      <option>House</option>
      <option>Apartment</option>
      <option>Condo</option>
      <option>Villa</option>
      <option>Studio</option>
      <option>Townhouse</option>
    </select>
    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
  </div>

  {/* Country Option */}
  <div className="relative w-full md:w-[220px] h-[56px]">
    <img
      src="/img/location.svg"
      alt="country"
      className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
    />
    <select
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      className="appearance-none w-full h-full bg-white border border-gray-300 rounded-full pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400"
    >
      <option>Indonesia</option>
      <option>USA</option>
      <option>Canada</option>
      <option>Australia</option>
      <option>United Kingdom</option>
      <option>India</option>
    </select>
    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
  </div>

  {/* Find Property Button */}
  <button
    onClick={handleSearch}
    className="bg-[#1E3A8A] text-white font-semibold px-8 md:px-12 h-[56px] rounded-full hover:bg-blue-800 transition text-lg shadow-md min-w-[200px] flex items-center justify-center w-full md:w-auto"
  >
    Find Property
  </button>
</div>

    </section>
  );
}
