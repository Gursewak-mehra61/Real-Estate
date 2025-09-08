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
      <div className="w-full py-6 px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-white font-normal space-y-4 sm:space-y-0 relative">
        {/* Left: Logo with gap */}
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <img src="/img/footer-logo.svg" alt="footer-logo" />
          <span className="text-white font-bold text-xl">PropBot</span>
        </div>

        {/* Center: Links */}
        <div className="flex justify-center items-center gap-7 flex-wrap">
          <span className="cursor-pointer hover:underline">For Sale</span>
          <span className="cursor-pointer hover:underline">Rentals</span>
          <span className="cursor-pointer hover:underline">New Projects</span>
          <span className="cursor-pointer hover:underline">Property News</span>
        </div>

        {/* Right: Copyright */}
        <div className="text-center sm:text-right">
          ©2025 Propbot. All rights reserved
        </div>
      </div>
    </footer>
  );
}
