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
    </section>
  );
}
