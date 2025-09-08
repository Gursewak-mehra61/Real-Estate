import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useNavigate } from "react-router-dom";

import { MapPin, Search, ChevronDown, ArrowUpRight, Bookmark } from "lucide-react";
import { HeroSkeleton, PropertyGridSkeleton } from "../components/SkeletonLoader";
import { fetchProperties } from "../services/api";

export default function Buy() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("For Rent");
  const [houseType, setHouseType] = useState("House");
  const [country, setCountry] = useState("Indonesia");
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchProperties()
      .then((data) => {
        setProperties(data.filter((p) => p.type === "sale"));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <HeroSkeleton />
        {/* Featured Properties Section Skeleton */}
        <section className="w-[90%] mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <div className="w-64 h-8 bg-gray-200 animate-pulse rounded"></div>
            <div className="w-48 h-6 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <PropertyGridSkeleton count={2} />
        </section>
        <Newsletter />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section Container */}
      <div className="w-full max-w-[90vw] md:max-w-[85vw] lg:max-w-[75vw] mx-auto mt-6 mb-16">
        {/* Hero Image Section */}
        <section className="relative w-full h-[320px] md:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 w-full flex flex-col items-start px-6 md:px-12 pb-12 md:pb-20 z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white text-left">
                Featured Properties For Sale
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-0 text-white opacity-90 text-left">
                Discover, Buy, or Rent Verified Properties with Ease
              </p>
            </div>
          </div>
        </section>

        {/* Filters Bar */}
        <div className="bg-transparent md:bg-white rounded-full flex flex-col md:flex-row justify-between items-center gap-4 mt-[-40px] px-4 md:px-10 py-4 max-w-5xl mx-auto shadow-lg z-20 relative">
          {/* Property Type */}
          <div className="relative w-full md:w-[220px]">
            <img
              src="/img/rent.svg"
              alt="rent"
              className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 mr-3"
            />
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="appearance-none w-full bg-white border border-gray-300 rounded-full py-2 pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400"
            >
              <option>For Buying</option>
              <option>For Rent</option>
              <option>For Sale</option>
              <option>For Lease</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* House Type */}
          <div className="relative w-full md:w-[220px]">
            <img
              src="/img/house.svg"
              alt="house"
              className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 mr-3"
            />
            <select
              value={houseType}
              onChange={(e) => setHouseType(e.target.value)}
              className="appearance-none w-full bg-white border border-gray-300 rounded-full py-2 pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400"
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

          {/* Country */}
          <div className="relative w-full md:w-[220px]">
            <img
              src="/img/location.svg"
              alt="country"
              className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 mr-3"
            />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="appearance-none w-full bg-white border border-gray-300 rounded-full py-2 pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400"
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
            className="bg-[#1E3A8A] text-white font-semibold px-10 md:px-12 py-4 rounded-full hover:bg-blue-800 transition text-lg shadow-md h-[56px] w-full md:w-auto flex items-center justify-center"
          >
            Find Property
          </button>
        </div>
      </div>

      {/* Featured Properties Section */}
      <section className="w-[90%] max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
          <h2 className="text-3xl font-bold text-gray-900">Featured Property</h2>
          <button className="text-blue-700 font-medium border border-blue-700 rounded-full px-6 py-3 hover:bg-blue-700 hover:text-white transition-all duration-300 flex items-center gap-2">
            See 268 New Projects
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-40 w-full mx-auto overflow-visible">
          {properties.map((property) => (
            <article key={property.id} className="relative flex flex-col items-center overflow-visible">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 md:h-64 object-cover rounded-2xl"
                style={{ display: "block" }}
              />

              {/* Details card - absolute, overlaps bottom of image */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[90%] md:w-[80%] bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center z-10">
                {/* Location + Bookmark row */}
                <div className="flex items-center justify-between w-full mb-2">
                  <div className="flex items-center text-gray-900 font-semibold text-base">
                    <MapPin className="w-5 h-5 text-blue-700 mr-2" />
                    {property.name}, {property.city}
                  </div>
                  <img src="/img/save.svg" alt="Bookmark" />
                </div>
                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 text-justify leading-snug">{property.description}</p>
                <hr className="w-full border-t-2 border-gray-200 mb-3" />
                {/* Price + Button */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full font-bold text-gray-900 text-lg gap-3 md:gap-0">
                  <span>${Number(property.price).toLocaleString()}</span>
                  <button className="bg-[#1E3A8A] font-semibold text-white text-sm px-5 py-2 rounded-full hover:bg-blue-800 transition w-full md:w-auto">
                    Know More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
