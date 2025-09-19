import React from "react";
import logo from "./assets/hederapay-logo.png"; // <-- place your logo here

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <img
        src={logo}
        alt="HederaPay Logo"
        className="w-32 h-32 mb-6 drop-shadow-lg"
      />

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        HederaPay
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8">
        Simplifying payments across Africa with secure, fast, and affordable
        Web3 technology powered by Hedera.
      </p>

      {/* Call to Action */}
      <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition">
        Get Started
      </button>
    </div>
  );
}

export default App;
