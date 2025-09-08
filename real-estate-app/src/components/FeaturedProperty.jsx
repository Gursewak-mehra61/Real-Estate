import React from "react";

export default function FeaturedProperty({ properties }) {
  const main = properties[0];
  const midCards = properties.slice(1, 3);
  const smallCards = properties.slice(3, 5);

  return (
    <section className="w-full max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-4 px-1">
        <h2 className="text-2xl font-bold text-[#1E3A8A]">Featured Property</h2>
        <button
          style={{ color: "#1E3A8A", backgroundColor: "#FFFFFF" }}
          className="border border-blue-700 text-blue-700 font-semibold px-4 py-2 rounded-full flex items-center gap-2 transition"
        >
          See 268 New Projects
          <span className="text-base">
            <img src="/img/vertical-arr.svg" alt="arrow" />
          </span>
        </button>
      </div>
      {/* Responsive arrangement */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main big card */}
        <div className="relative rounded-[20px] shadow-lg overflow-hidden min-h-[240px] lg:min-h-0 lg:max-w-[350px] w-full lg:flex-1">
          <img
            src={main?.image}
            alt={main?.name}
            className="w-full h-[240px] lg:h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full px-6 py-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
            <div className="text-white text-sm opacity-80">By Finder &amp; Projects</div>
            <div className="text-white font-bold text-lg mt-1">
              {main?.name || "Kenanga Residence"}
            </div>
          </div>
        </div>

        {/* Container for mid and small cards */}
        <div className="flex flex-row justify-start gap-6 w-full lg:w-auto">
          {/* Mid-size cards */}
          <div className="flex flex-row sm:flex-col gap-6">
            {midCards.map((p, i) => (
              <div
                key={p.id || i}
                className="rounded-[20px] shadow-md overflow-hidden border border-gray-100 w-[150px] h-[120px] sm:w-auto sm:h-auto flex-shrink-0"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-[150px] h-[120px] sm:w-full sm:h-auto object-cover"
                />
              </div>
            ))}
          </div>
          {/* Small stacked cards */}
          <div className="flex flex-row sm:flex-col gap-6">
            {smallCards.map((p, i) => (
              <div
                key={p.id || i}
                className="rounded-[20px] shadow-md overflow-hidden border border-gray-100 w-[120px] h-[72px] sm:w-auto sm:h-auto flex-shrink-0"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-[120px] h-[72px] sm:w-full sm:h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
