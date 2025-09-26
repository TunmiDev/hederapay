import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-400 py-6 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} HederaPay. All rights reserved.
        </p>

        {/* Right Section */}
        <p className="text-sm text-center md:text-right mt-2 md:mt-0">
          Powered by{" "}
          <span className="text-purple-400 font-semibold">Hedera</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
