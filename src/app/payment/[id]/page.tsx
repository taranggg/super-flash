"use client";
import { Button } from "@/components/Button";
import AuroraShader from "@/components/aurora-shader";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Payment() {
  return (
    <div className="min-h-screen text-zinc-100 font-sans relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <AuroraShader />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <div className="max-w-screen-xl mx-auto px-6 pt-36 pb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-cyan-400">
              Buy FLASH USDT
            </h1>
            <p className="text-lg md:text-xl text-cyan-300">
              Dynamic rate: 1 USDT = 5 FLASH USDT
            </p>
            <div className="mt-4 text-sm text-cyan-400">Order ID: #123456</div>
            <div className="flex justify-center gap-4 mt-4">
              <span
                className="px-3 py-1 rounded-full shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,60,40,0.4)] text-green-300 text-xs backdrop-blur-lg"
                style={{
                  boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.37)",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(30,60,40,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Verified
              </span>
              <span
                className="px-3 py-1 rounded-full shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,60,0.4)] text-blue-300 text-xs backdrop-blur-lg"
                style={{
                  boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.37)",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(30,30,60,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                10-15 min delivery
              </span>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Buy Form</h2>
            <form className="max-w-xl mx-auto grid gap-6 p-8 rounded-2xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(20,20,30,0.7)] backdrop-blur-lg">
              <select className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(20,20,30,0.7)] text-cyan-100 backdrop-blur-lg">
                <option>Select Network</option>
                <option>TRC20</option>
                <option>Binance</option>
                <option>ETH</option>
              </select>
              <input
                type="number"
                placeholder="FLASH amount"
                className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(20,20,30,0.7)] text-cyan-100 placeholder:text-cyan-400 backdrop-blur-lg"
              />
              <input
                type="text"
                placeholder="Wallet address"
                className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(20,20,30,0.7)] text-cyan-100 placeholder:text-cyan-400 backdrop-blur-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(20,20,30,0.7)] text-cyan-100 placeholder:text-cyan-400 backdrop-blur-lg"
              />
              <div className="text-sm text-cyan-400">
                You must pay:{" "}
                <span className="font-bold">[calculated USDT]</span>
              </div>
              <div className="text-sm text-cyan-400">
                You will receive:{" "}
                <span className="font-bold">[calculated FLASH USDT]</span>
              </div>
              <Button type="submit">Create Order</Button>
            </form>
          </div>
          <div className="max-w-screen-xl mx-auto px-6 py-12">
            <h2 className="text-xl font-semibold mb-4">Instructions</h2>
            <ul className="list-decimal pl-6 space-y-2 text-cyan-300">
              <li>Send USDT to the wallet shown after submitting</li>
              <li>Send transaction ID</li>
              <li>We verify and deliver FLASH USDT</li>
              <li>Estimated delivery: 10-15 minutes</li>
            </ul>
          </div>
          <div className="max-w-screen-xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold mb-8 text-center">FAQs</h2>
            <div className="max-w-2xl mx-auto">
              <div
                className="mb-6 rounded-2xl shadow-xl backdrop-blur-lg bg-[rgba(30,30,40,0.6)] border border-[rgba(255,255,255,0.08)] p-6"
                style={{
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  borderRadius: "1.5rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(30,30,40,0.6)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="font-semibold text-cyan-200">
                  Is my payment secure?
                </div>
                <div className="text-sm text-cyan-100 opacity-80">
                  Yes, all payments are verified and protected.
                </div>
              </div>
              <div
                className="mb-6 rounded-2xl shadow-xl backdrop-blur-lg bg-[rgba(30,30,40,0.6)] border border-[rgba(255,255,255,0.08)] p-6"
                style={{
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  borderRadius: "1.5rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(30,30,40,0.6)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="font-semibold text-cyan-200">
                  How long does delivery take?
                </div>
                <div className="text-sm text-cyan-100 opacity-80">
                  Usually within 10-15 minutes.
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
