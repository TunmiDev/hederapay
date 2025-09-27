// src/Payments.jsx
import React, { useState, useEffect } from "react";
import { HashConnect } from "hashconnect";
import { Link } from "react-router-dom";

const Payments = () => {
  const [hashConnect, setHashConnect] = useState(null);
  const [pairingString, setPairingString] = useState(null);
  const [accountId, setAccountId] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [txStatus, setTxStatus] = useState("");

  // Initialize HashConnect
  useEffect(() => {
    const initHashConnect = async () => {
      try {
        console.log("🔄 Initializing HashConnect...");
        const hc = new HashConnect(true); // enable debug logs
        setHashConnect(hc);

        const appMetadata = {
          name: "HederaPay Demo",
          description: "Demo payments app for Hedera Hackathon",
          icon: "https://hederapay.com/logo.png",
        };

        // ✅ FIX: only two params (metadata, "testnet")
        const initData = await hc.init(appMetadata, "testnet");
        console.log("✅ HashConnect initData:", initData);

        setPairingString(initData.pairingString);

        // Handle pairing event
        hc.pairingEvent.on((pairingInfo) => {
          console.log("🎉 Wallet paired:", pairingInfo);
          if (pairingInfo && pairingInfo.accountIds?.length > 0) {
            setAccountId(pairingInfo.accountIds[0]);
          }
        });
      } catch (err) {
        console.error("❌ Init failed:", err);
      }
    };

    initHashConnect();
  }, []);

  // Connect Wallet
  const connectWallet = async () => {
    if (!hashConnect || !pairingString) {
      console.warn("⚠️ HashConnect not ready yet.");
      return;
    }
    console.log("🔗 Connecting to wallet...");
    await hashConnect.connectToLocalWallet(pairingString);
  };

  // Simulate sending transaction
  const sendTransaction = () => {
    if (!recipient || !amount) {
      alert("Enter recipient and amount");
      return;
    }

    setTxStatus(`Transaction of ${amount} HBAR to ${recipient} sent!`);
    setRecipient("");
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 flex flex-col items-center">
      <Link to="/" className="text-purple-400 hover:text-purple-300 mb-6">
        &larr; Back to Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
        HederaPay - Payments
      </h1>

      {!accountId ? (
        <button
          onClick={connectWallet}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="mb-6 text-center">
          <p className="text-gray-300 mb-2">Connected Account:</p>
          <p className="text-purple-400 font-semibold">{accountId}</p>
        </div>
      )}

      {accountId && (
        <div className="flex flex-col gap-4 w-full max-w-md mt-6">
          <input
            type="text"
            placeholder="Recipient Account ID"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="px-4 py-2 rounded-xl text-black"
          />
          <input
            type="number"
            placeholder="Amount (HBAR)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="px-4 py-2 rounded-xl text-black"
          />
          <button
            onClick={sendTransaction}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Send
          </button>
          {txStatus && (
            <p className="text-green-400 font-semibold mt-4 text-center">
              {txStatus}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Payments;
