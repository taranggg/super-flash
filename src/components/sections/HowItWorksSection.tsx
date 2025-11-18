import React from "react";
import { cn } from "@/lib/utils";

export function HowItWorksSection() {
  return (
    <section className={cn("")}>
      <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {[
          "Select USDT amount",
          "Agree to terms",
          "Make payment",
          "Submit transaction ID",
          "Receive FLASH USDT",
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
    </section>
  );
}
