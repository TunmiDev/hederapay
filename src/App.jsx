import React from "react";
import logo from "./assets/hederapay-logo.png"; // <-- place your logo here

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Logo as H1 */}
      <h1 className="mt-2">
        <img
          src={logo}
          alt="HederaPay"
          className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl mx-auto"
        />
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-6  leading-relaxed">
        Simplifying payments across Africa with secure, fast, and affordable
        Web3 technology powered by{" "}
        <span className="text-purple-400 font-semibold">Hedera</span>.
      </p>

      {/* Call to Action */}
      <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
        Get Started
      </button>
    </div>
  );
}

export default App;
