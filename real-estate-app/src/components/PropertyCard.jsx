import React from "react";

export default function PropertyCard({ property, isRental = false }) {
  return (
    <div className="bg-[#F1F1F1] rounded-[18px] shadow-md border border-gray-200 hover:shadow-lg transition-all flex flex-col overflow-hidden h-auto max-w-sm w-full mx-auto sm:mx-0">
      {/* Image wrapper with padding */}
      <div className="p-[10px]">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-[200px] sm:h-48 md:h-52 lg:h-52 object-cover rounded-[14px]"
        />
      </div>

      <div className="px-4 pb-4 flex-1 mt-4 flex flex-col">
        <div className="flex items-center text-xs text-gray-400 mb-1">
          <img src="/img/card-location.svg" alt="location" />
          {property.city}, {property.state}
          <span
            style={{ fontSize: "16px" }}
            className="ml-auto flex items-center gap-1 text-[#979797]"
          >
            <img src="/img/star.svg" alt="star" /> {property.rating ?? "4.5"}/5
          </span>
        </div>
        <div style={{ color: "#1E1E1E" }} className="text-[16px] mb-2">
          {property.description ||
            "Spacious 3BHK apartment in a prime location with modern amenities."}
        </div>
        <div className="flex flex-col sm:flex-row items-end justify-between mt-1 gap-3 sm:gap-0">
          <button className="bg-[#1E3A8A] text-white text-sm px-6 py-2 font-semibold rounded-[31px] shadow hover:bg-blue-900 transition w-full sm:w-auto text-center">
            Buy Now
          </button>
          <div
            style={{ color: "#222222" }}
            className="text-lg whitespace-nowrap sm:ml-4 text-center sm:text-right w-full sm:w-auto"
          >
            {isRental
              ? `$${property.rentPrice?.toLocaleString()}/month`
              : `$${property.price?.toLocaleString()}`}
          </div>
        </div>
      </div>
    </div>
  );
}
