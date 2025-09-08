import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCards";
import FeaturedProperty from "../components/FeaturedProperty";
import PropertyCard from "../components/PropertyCard";
import Newsletter from "../components/Newsletter";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FeaturedPropertySkeleton, PropertyGridSkeleton } from "../components/SkeletonLoader";
// import Footer from "../components/Footer";
import { fetchProperties } from "../services/api";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProperties()
      .then((data) => {
        setProperties(data);
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
        <main className="w-[90%] max-w-[90vw] md:max-w-[85vw] lg:max-w-none mx-auto px-4">
          {/* Hero Skeleton */}
          <div className="relative w-full h-[320px] md:h-[420px] lg:h-[600px] bg-gray-200 animate-pulse rounded-3xl mb-8"></div>

          {/* What We Do Skeleton */}
          <section className="text-center mb-12">
            <div className="w-64 h-10 bg-gray-200 animate-pulse rounded mx-auto mb-4"></div>
            <div className="w-96 h-6 bg-gray-200 animate-pulse rounded mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg animate-pulse">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="w-32 h-6 bg-gray-200 rounded mx-auto mb-2"></div>
                  <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded mx-auto"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Property Skeleton */}
          <FeaturedPropertySkeleton />

          {/* Property Grids Skeleton */}
          <section className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <div className="w-64 h-8 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div className="w-48 h-6 bg-gray-200 animate-pulse rounded"></div>
            </div>
            <PropertyGridSkeleton count={4} />
          </section>

          <section className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <div className="w-72 h-8 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div className="w-40 h-10 bg-gray-200 animate-pulse rounded-full"></div>
            </div>
            <PropertyGridSkeleton count={4} />
          </section>
        </main>
        <Newsletter />
      </>
    );
  }

  const saleProperties = properties.filter((p) => p.type === "sale");
  const rentProperties = properties.filter((p) => p.type === "rent");

  return (
    <>
      <Navbar />

      <main className="w-[90%] max-w-[90vw] md:max-w-[85vw] lg:max-w-none mx-auto px-4">
        {/* Hero */}
        <Hero />

        {/* What We Do */}
        <section className="text-center mb-12 mt-10">
          <h2 style={{ color: "#1E3A8A", fontSize: "35px" }} className="font-bold mb-4">
            What We Do?
          </h2>
          <p style={{ maxWidth: "479px" }} className="text-gray-600 text-lg mx-auto">
            Helping you find, buy, and rent the perfect property with ease.
          </p>
          <ServiceCards />
        </section>

        {/* Featured Property */}
        <section className="mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4 lg:gap-0">
            <h2 className="text-4xl font-bold text-blue-800">Featured Property</h2>
            <button className="text-blue-700 font-medium border border-blue-700 rounded-full px-6 py-3 hover:bg-blue-700 hover:text-white transition-all duration-300 flex items-center gap-2">
              See 268 New Projects
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main large property card */}
            <div className="relative flex-1 rounded-3xl overflow-hidden shadow-lg group cursor-pointer max-w-full lg:max-w-[600px] min-h-[300px] lg:min-h-[384px]">
              <img
                src={properties[0].image}
                alt={properties[0].name}
                className="w-full h-[300px] lg:h-[384px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-5 rounded-b-3xl">
                <p className="text-white text-sm opacity-90 mb-1">By Finder & Projects</p>
                <p className="text-white font-bold text-2xl">{properties[0].name}</p>
              </div>
            </div>

            {/* Right side columns - stack vertically on small */}
            <div className="flex flex-col lg:flex-row gap-6 flex-shrink-0 max-w-full lg:max-w-[380px]">
              {/* First column */}
              <div className="flex flex-row lg:flex-col gap-6">
                <div className="w-72 h-48 lg:h-96 rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                  <img
                    src={properties[1].image}
                    alt="Property"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Second column */}
              <div className="flex flex-row lg:flex-col gap-6">
                <div className="w-80 h-20 lg:h-44 rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                  <img
                    src={properties[3].image}
                    alt="Property"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-80 h-20 lg:h-44 rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Property"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Properties For Sale */}
        <section className="mt-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E3A8A] mb-1">
                Best Properties Available For Sale
              </h2>
              <p className="text-gray-600 text-base md:text-[1.07rem]" style={{ maxWidth: "600px" }}>
                Browse our top-rated properties for sale, featuring premium listings tailored to your needs. Find your dream home today!
              </p>
            </div>
            <button className="bg-[#1E3A8A] text-white px-5 py-4 rounded-full shadow hover:bg-blue-900 transition md:mt-0 mt-4">
              View More Properties
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-7">
            {saleProperties.slice(0, 4).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Rental Properties */}
        <section className="mt-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E3A8A] mb-1">
                Find The Perfect Rental Home
              </h2>
              <p className="text-gray-600 text-base md:text-[1.07rem]" style={{ maxWidth: "600px" }}>
                Browse our top-rated properties for rent, featuring premium listings tailored to your needs. Find your dream home today!
              </p>
            </div>
            <button className="bg-[#1E3A8A] text-white px-5 py-4 rounded-full shadow hover:bg-blue-900 transition md:mt-0 mt-4">
              View All Rentals
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-7">
            {rentProperties.slice(0, 4).map((property) => (
              <PropertyCard key={property.id} property={property} isRental />
            ))}
          </div>
        </section>

        {/* Start Your Journey */}
        <section className="my-14">
          <h2 className="text-[2rem] font-extrabold text-[#1E3A8A] mb-1 text-left">
            Start Your Journey Today!
          </h2>
          <p className="text-gray-600 mb-5 text-left text-base">
            Create a profile in seconds and find your ideal home.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="flex-1 min-w-0 px-5 py-3 rounded-[8px] border border-gray-200 bg-white text-gray-700 focus:outline-[#1E3A8A] transition"
            />
            <div className="flex-1 min-w-0 relative">
              <select
                className="w-full px-5 py-3 rounded-[8px] border-2 border-[#1E3A8A] bg-white text-gray-700 focus:outline-[#1E3A8A] transition appearance-none"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select User Type
                </option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Enter Your Location"
              className="flex-1 min-w-0 px-5 py-3 rounded-[8px] border border-gray-200 bg-white text-gray-700 focus:outline-[#1E3A8A] transition"
            />
            <button
              type="submit"
              className="px-11 py-3 rounded-full bg-[#1E3A8A] text-white hover:bg-blue-800 transition"
              style={{ minWidth: "140px" }}
            >
              Continue
            </button>
          </form>
        </section>

        {/* Latest Properties Section */}
       <section className="mt-20">
  <div className="max-w-7xl mx-auto bg-white flex flex-col md:flex-row items-center md:items-start p-4 md:p-16 gap-8 md:gap-20">
    
    {/* Images: Responsive stack/overlap */}
    <div className="relative flex flex-col items-center w-full md:w-auto">
      {/* Main image – always visible, fills width mobile */}
      <img
        src="/img/img1.png"
        alt="Modern House"
        className="w-full md:w-[320px] h-[160px] md:h-[400px] rounded-[10px] shadow-lg border-4 border-white object-cover"
      />

      {/* Second image – stacks below on mobile, overlaps on desktop */}
      <img
        src="/img/img2.png"
        alt="Cabin House"
        className="
          w-full md:w-[320px]
          h-[130px] md:h-[320px]
          rounded-[10px] border border-white shadow-lg object-cover
          mt-4 md:mt-0
          static md:absolute
          md:bottom-[-30px] md:right-[-90px]
        "
      />
    </div>

    {/* Right: Text and Icons */}
    <div className="flex-1 max-w-xl px-2 md:px-0 flex flex-col justify-center h-full mt-6 md:mt-0 md:pl-14">
      <h2 className="text-[#1E3A8A] font-extrabold text-xl md:text-3xl leading-tight mb-8 md:mb-10">
        We Provide Latest Properties <br />
        For Our Valuable Clients
      </h2>
      <div className="space-y-6 md:space-y-8">
        <div className="flex gap-2 md:gap-4 items-start">
          <div className="text-[#1E3A8A] text-2xl md:text-3xl flex items-center pt-1">
            <img src="/img/budget.svg" alt="budget" className="w-20 h-20 sm:w-12 sm:h-12 md:w-16 md:h-16" />
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-lg text-[#1E3A8A] mb-1">Budget Friendly</h3>
            <p className="text-black text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.
            </p>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 items-start">
          <div className="text-[#1E3A8A] text-2xl md:text-3xl flex items-center pt-1">
            <img src="/img/trusted.svg" alt="trusted" className="w-20 h-20 sm:w-12 sm:h-12 md:w-16 md:h-16" />
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-lg text-[#1E3A8A] mb-1">Trusted By Thousand</h3>
            <p className="text-black text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.
            </p>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 items-start">
          <div className="text-[#1E3A8A] text-2xl md:text-3xl flex items-center pt-1">
            <img src="/img/prime-map.svg" alt="location" className="w-20 h-20 sm:w-12 sm:h-12 md:w-16 md:h-16" />
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-lg text-[#1E3A8A] mb-1">Prime Location</h3>
            <p className="text-black text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Newsletter */}
      </main>
      <Newsletter />
    </>
  );
}
