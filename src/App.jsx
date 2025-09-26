import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./assets/HederaPay.png";
import HowItWorks from "./HowItWorks";
import Payments from "./Payments";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Logo as H1 */}
      <h1 className="mt-2 flex items-center gap-3">
        <img
          src={logo}
          alt="HederaPay logo"
          className="w-16 h-16 md:w-16 md:h-20"
        />
        <span className="text-3xl md:text-4xl font-bold text-white">
          ederaPay
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-6 leading-relaxed">
        Simplifying payments across Africa with secure, fast, and affordable
        Web3 technology powered by{" "}
        <span className="text-purple-400 font-semibold">Hedera</span>.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4">
        <Link
          to="/payments"
          className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300"
        >
          Connect Wallet
        </Link>

        <Link
          to="/how-it-works"
          className="px-10 py-3 border border-purple-500 text-purple-400 rounded-2xl hover:bg-purple-500 hover:text-white transition duration-300"
        >
          How it Works
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/payments" element={<Payments />} />
    </Routes>
  );
}

export default App;
