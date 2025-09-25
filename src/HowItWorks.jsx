import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Wallet, Send, CheckCircle } from "lucide-react";

function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 flex flex-col items-center">
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center text-purple-400 hover:text-purple-300 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400">
        How HederaPay Works
      </h1>

      {/* Steps */}
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl w-full">
        {/* Step 1 */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
          <Wallet className="w-12 h-12 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">1. Connect Wallet</h2>
          <p className="text-gray-400">
            Link your Hedera-supported wallet securely to start making payments.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
          <Send className="w-12 h-12 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">2. Enter Details</h2>
          <p className="text-gray-400">
            Provide the recipient’s wallet address and the amount you want to
            send.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
          <CheckCircle className="w-12 h-12 text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">3. Send & Verify</h2>
          <p className="text-gray-400">
            Confirm the transaction and verify it instantly on Hedera Explorer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
