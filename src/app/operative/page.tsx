"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/SectionContainer";
import { useState } from "react";

export default function Operative() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-cyan-900 via-blue-900 to-blue-950 text-cyan-100">
      <Header />
      <main>
        <SectionContainer className="text-center pt-16 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-sky-500 dark:text-cyan-400">
            Become an Operator
          </h1>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300">
            Earn high commissions and join a global program.
          </p>
        </SectionContainer>
        <SectionContainer>
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
                className="rounded-xl bg-zinc-100 dark:bg-zinc-900 p-6 shadow hover:shadow-lg transition flex flex-col items-center"
              >
                <div className="w-10 h-10 bg-sky-500 dark:bg-cyan-400 rounded-full mb-4" />
                <div className="font-semibold mb-2">{benefit}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                  Benefit description.
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
        <SectionContainer>
          <h2 className="text-2xl font-bold mb-8 text-center">How To Join</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[
              "Apply",
              "KYC/Verification",
              "Receive dashboard or link",
              "Earn on transactions",
            ].map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-500 dark:bg-cyan-400 text-white dark:text-black flex items-center justify-center font-bold text-lg mb-2">
                  {i + 1}
                </div>
                <div className="w-8 h-8 bg-zinc-800 rounded mb-2" />
                <div className="font-semibold text-center">{step}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                  Step description
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
        <SectionContainer>
          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <div className="border border-zinc-300 dark:border-zinc-700 rounded-lg p-6 max-w-xl mx-auto bg-zinc-50 dark:bg-zinc-900">
            <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>Valid ID</li>
              <li>Minimum volume (if any)</li>
              <li>Compliance with rules</li>
            </ul>
          </div>
        </SectionContainer>
        <SectionContainer>
          <h2 className="text-2xl font-bold mb-8 text-center">
            Application Form
          </h2>
          {submitted ? (
            <div className="max-w-xl mx-auto p-6 rounded-lg bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-center">
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
              className="max-w-xl mx-auto grid gap-6"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Full name"
                required
                className="px-4 py-3 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="px-4 py-3 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700"
              />
              <input
                type="text"
                placeholder="Country"
                required
                className="px-4 py-3 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700"
              />
              <input
                type="text"
                placeholder="Wallet address"
                required
                className="px-4 py-3 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700"
              />
              <input
                type="text"
                placeholder="Social/YouTube link (optional)"
                className="px-4 py-3 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700"
              />
              <textarea
                placeholder="Short note"
                required
                className="px-4 py-3 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-sky-500 dark:bg-cyan-400 text-white dark:text-black font-semibold shadow hover:scale-105 transition"
              >
                Apply Now
              </button>
            </form>
          )}
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
