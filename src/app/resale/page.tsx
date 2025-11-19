"use client";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Resale() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen text-zinc-100 font-sans bg-gradient-to-br from-black via-[#0a1a2f] to-[#1a2a3f]">
      <Header />
      <main>
        <div>
          <div className="max-w-screen-xl mx-auto px-6 pt-36 pb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sky-500 dark:text-cyan-400">
              Resale Your FLASH USDT
            </h1>
            <p className="text-lg md:text-xl text-cyan-300">
              Quickly resell your FLASH USDT in a few simple steps.
            </p>
          </div>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 md:py-12">
            <h2 className="text-2xl font-bold mb-8 text-center">
              How Resale Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {[
                "Enter details",
                "Upload screenshots",
                "We verify",
                "You receive USDT",
              ].map((step, i) => (
                <div key={step} className="flex flex-col items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mb-2 shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.6)] text-cyan-200 backdrop-blur-lg"
                    style={{
                      boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.37)",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(30,30,40,0.6)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-xl mb-2 shadow" />
                  <div className="font-semibold text-center text-cyan-100">
                    {step}
                  </div>
                  <div className="text-sm text-cyan-100 opacity-80 text-center">
                    Step description
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto px-6 py-12">
            <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ul className="list-disc pl-6 space-y-2 text-cyan-100">
                <li>Verification happens manually</li>
                <li>Screenshots must be clear</li>
                <li>Wallet address must match</li>
                <li>Response within 30 minutes</li>
              </ul>
              <div className="hidden md:block">
                <div
                  className="w-full h-40 rounded-3xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.6)] backdrop-blur-lg"
                  style={{
                    boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.37)",
                    borderRadius: "1.5rem",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(30,30,40,0.6)",
                    backdropFilter: "blur(12px)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Resale Request Form
            </h2>
            {submitted ? (
              <div
                className="max-w-xl mx-auto p-6 rounded-2xl shadow-xl backdrop-blur-lg bg-[rgba(30,60,40,0.4)] border border-[rgba(255,255,255,0.08)] text-green-300 text-center"
                style={{
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  borderRadius: "2rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(30,60,40,0.4)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="text-xl font-semibold mb-2">
                  Request Submitted!
                </div>
                <div>
                  We have received your resale request. You will get a response
                  within 30 minutes.
                </div>
              </div>
            ) : (
              <form
                className="max-w-xl mx-auto grid gap-6 p-8 rounded-2xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(20,20,30,0.7)] backdrop-blur-lg"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.7)] text-cyan-100 placeholder:text-cyan-400 backdrop-blur-lg"
                />
                <input
                  type="number"
                  placeholder="FLASH amount"
                  required
                  className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.7)] text-cyan-100 placeholder:text-cyan-400 backdrop-blur-lg"
                />
                <input
                  type="file"
                  multiple
                  className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.7)] text-cyan-100 backdrop-blur-lg"
                />
                <Button type="submit">Request Resale</Button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
