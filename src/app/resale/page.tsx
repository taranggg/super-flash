"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/SectionContainer";
import { useState } from "react";

export default function Resale() {
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
            Resale Your FLASH USDT
          </h1>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300">
            Quickly resell your FLASH USDT in a few simple steps.
          </p>
        </SectionContainer>
        <SectionContainer>
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
                <div className="w-10 h-10 rounded-full bg-sky-500 dark:bg-cyan-400 text-white dark:text-black flex items-center justify-center font-bold text-lg mb-2">
                  {i + 1}
                </div>
                <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded mb-2" />
                <div className="font-semibold text-center">{step}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                  Step description
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
        <SectionContainer>
          <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>Verification happens manually</li>
              <li>Screenshots must be clear</li>
              <li>Wallet address must match</li>
              <li>Response within 30 minutes</li>
            </ul>
            <div className="hidden md:block">
              <div className="w-full h-40 bg-zinc-200 dark:bg-zinc-800 rounded" />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer>
          <h2 className="text-2xl font-bold mb-8 text-center">
            Resale Request Form
          </h2>
          {submitted ? (
            <div className="max-w-xl mx-auto p-6 rounded-lg bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-center">
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
              className="max-w-xl mx-auto grid gap-6"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Email"
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
                type="number"
                placeholder="FLASH amount"
                required
                className="px-4 py-3 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700"
              />
              <input
                type="file"
                multiple
                className="px-4 py-3 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-sky-500 dark:bg-cyan-400 text-white dark:text-black font-semibold shadow hover:scale-105 transition"
              >
                Request Resale
              </button>
            </form>
          )}
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
