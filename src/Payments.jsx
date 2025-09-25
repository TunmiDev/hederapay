import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Wallet, Send } from "lucide-react";

function Payments() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [txSuccess, setTxSuccess] = useState(false);

  // Mock connect wallet
  const handleConnectWallet = () => {
    setWalletConnected(true);
  };

  // Mock send payment
  const handleSendPayment = (e) => {
    e.preventDefault();
    if (recipient && amount) {
      setTxSuccess(true);
    }
  };

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
        HederaPay Payments
      </h1>

      {/* Wallet Connection */}
      {!walletConnected ? (
        <button
          onClick={handleConnectWallet}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform mb-8"
        >
          <Wallet className="inline w-5 h-5 mr-2" />
          Connect Wallet
        </button>
      ) : (
        <p className="mb-8 text-green-400 font-semibold">✅ Wallet Connected</p>
      )}

      {/* Payment Form */}
      {walletConnected && !txSuccess && (
        <form
          onSubmit={handleSendPayment}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
        >
          <div>
            <label className="block text-left text-sm text-gray-400 mb-1">
              Recipient Address
            </label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Enter Hedera account ID"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-left text-sm text-gray-400 mb-1">
              Amount (HBAR)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
          >
            <Send className="inline w-5 h-5 mr-2" />
            Send Payment
          </button>
        </form>
      )}

      {/* Success Message */}
      {txSuccess && (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center max-w-md mt-6">
          <h2 className="text-xl font-bold text-green-400 mb-3">
            ✅ Payment Sent Successfully!
          </h2>
          <p className="text-gray-400 mb-4">
            Your transaction has been submitted on Hedera Testnet.
          </p>
          <a
            href="https://hashscan.io/testnet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            View on Hedera Explorer
          </a>
        </div>
      )}
    </div>
  );
}

export default Payments;
