import React from "react";
import { BarChart3, Award, Mic, Lock } from "lucide-react";
const cards = [
  {
    img: <img src="/img/cylinder-svg.svg" alt="Buy & Sell Properties" />,
    title: "Buy & Sell Properties",
    desc: "Find verified homes for sale or list your property with ease.",
  },
  {
    img: <img src="/img/key-chain.svg" alt="Buy & Sell Properties" />,
    title: "Find Rental Homes",
    desc: "Browse through thousands of rental options suited to your needs",
  },
  {
    img: <img src="/img/mic.svg" alt="Buy & Sell Properties" />,
    title: "Smart AI Property Search",
    desc: "Get instant recommendations based on your budget & location",
  },
  {
    img: <img src="/img/lock.svg" alt="Buy & Sell Properties" />,
    title: "Safe & Secure Transactions",
    desc: "Verified listings & secure deals to ensure a smooth experience.",
  },
];

export default function ServiceCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ img, title, desc }) => (
          <div
            key={title}
            style={{ backgroundColor: "#EEEEEE" }}
            className="rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 rounded-full mb-5 sm:mb-6">
              {typeof img === "string" ? (
                <img src={img} alt={title} className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              ) : (
                img
              )}
            </div>
            <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3 leading-tight">
              {title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-[280px] sm:max-w-none">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
