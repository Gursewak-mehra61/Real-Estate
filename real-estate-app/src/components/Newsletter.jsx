import React, { useState } from "react";

export default function NewsletterFooter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#1E3A8ACC] text-white pt-14 pb-4 w-full">
      {/* Newsletter */}
      <div className="flex flex-col items-center justify-center w-full px-4">
  <h2 className="text-3xl font-bold mb-5 text-center">
    Get in Touch with Us
  </h2>
  <p className="text-xl mb-8 text-center font-normal">
    Subscribe now for exclusive
    <br />
    property insights and deals!
  </p>
  <form onSubmit={handleSubmit} className="w-full flex justify-center mb-10 px-2 sm:px-0">
    <div className="flex flex-col sm:flex-row items-center w-full max-w-full sm:max-w-xl bg-[#D9D9D9] rounded-[16px] sm:rounded-full px-3 sm:px-4 py-4 sm:py-2 gap-3 sm:gap-0">
      <input
        type="email"
        className="w-full px-4 py-3 sm:px-3 sm:py-3 rounded-[12px] sm:rounded-full bg-transparent text-gray-900 text-lg outline-none border-none font-medium placeholder-gray-600"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-7 py-3 sm:py-2 rounded-[12px] sm:rounded-full bg-[#1E3A8A] text-white text-lg border-none shadow-none"
      >
        Submit
      </button>
    </div>
  </form>
</div>


      {/* Footer */}
      <div className="w-full py-6 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
    
    {/* Left: Logo */}
    <div className="flex items-center gap-2">
      <img src="/img/footer-logo.svg" alt="footer-logo" className="w-6 h-6" />
      <span className="font-bold text-xl">PropBot</span>
    </div>

    {/* Center: Links */}
    <div className="flex justify-center items-center gap-6 flex-wrap text-sm">
      <span className="cursor-pointer hover:underline">For Sale</span>
      <span className="cursor-pointer hover:underline">Rentals</span>
      <span className="cursor-pointer hover:underline">New Projects</span>
      <span className="cursor-pointer hover:underline">Property News</span>
    </div>

    {/* Right: Copyright */}
    <div className="text-sm text-center sm:text-right">
      ©2025 Propbot. All rights reserved
    </div>
  </div>
    </footer>
  );
}
