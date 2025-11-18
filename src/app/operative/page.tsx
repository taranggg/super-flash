"use client";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Operative() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen text-zinc-100 font-sans bg-gradient-to-br from-black via-[#0a1a2f] to-[#1a2a3f]">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-6 pt-36 pb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sky-500 dark:text-cyan-400">
            Become an Operator
          </h1>
          <p className="text-lg md:text-xl text-zinc-300">
            Earn high commissions and join a global program.
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Program Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "High commissions",
              "Support",
              "No lock-ins",
              "Global availability",
            ].map((benefit, i) => (
              <div
                key={benefit}
                className="rounded-2xl shadow-xl backdrop-blur-lg bg-[rgba(30,30,40,0.6)] border border-[rgba(255,255,255,0.08)] p-8 flex flex-col items-center transition-all hover:scale-105"
                style={{
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  borderRadius: "2rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(30,30,40,0.6)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="w-12 h-12 bg-cyan-400/60 rounded-full mb-4 flex items-center justify-center shadow-lg" />
                <div className="font-semibold mb-2 text-cyan-200">
                  {benefit}
                </div>
                <div className="text-sm text-cyan-100 opacity-80 text-center">
                  Benefit description.
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">How To Join</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[
              "Apply",
              "KYC/Verification",
              "Receive dashboard or link",
              "Earn on transactions",
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
          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <div
            className="rounded-2xl shadow-xl backdrop-blur-lg bg-[rgba(30,30,40,0.6)] border border-[rgba(255,255,255,0.08)] p-6 max-w-xl mx-auto"
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              borderRadius: "2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(30,30,40,0.6)",
              backdropFilter: "blur(16px)",
            }}
          >
            <ul className="list-disc pl-6 space-y-2 text-cyan-100">
              <li>Valid ID</li>
              <li>Minimum volume (if any)</li>
              <li>Compliance with rules</li>
            </ul>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Application Form
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
                Application Submitted!
              </div>
              <div>
                Thank you for applying. We will review your application and
                contact you soon.
              </div>
            </div>
          ) : (
            <form
              className="max-w-xl mx-auto grid gap-6 p-8 rounded-2xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(20,20,30,0.7)] backdrop-blur-lg"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Full name"
                required
                className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.7)] text-cyan-100 placeholder:text-cyan-400 backdrop-blur-lg"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.7)] text-cyan-100 placeholder:text-cyan-400 backdrop-blur-lg"
              />
              <input
                type="text"
                placeholder="Country"
                required
                className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.7)] text-cyan-100 placeholder:text-cyan-400 backdrop-blur-lg"
              />
              <input
                type="text"
                placeholder="Wallet address"
                required
                className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.7)] text-cyan-100 placeholder:text-cyan-400 backdrop-blur-lg"
              />
              <input
                type="text"
                placeholder="Social/YouTube link (optional)"
                className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.7)] text-cyan-100 placeholder:text-cyan-400 backdrop-blur-lg"
              />
              <textarea
                placeholder="Short note"
                required
                className="px-4 py-3 rounded-xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.7)] text-cyan-100 placeholder:text-cyan-400 backdrop-blur-lg"
              />
              <Button type="submit">Apply Now</Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
