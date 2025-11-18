import React from "react";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
  return (
    <section className={cn("py-12")}>
      <h2 className="text-2xl font-bold mb-8 text-center text-cyan-300 drop-shadow">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          "Fast Delivery",
          "Secure Payments",
          "Trusted Support",
          "Best Rates",
        ].map((feature, i) => (
          <div
            key={feature}
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
            <div className="font-semibold mb-2 text-cyan-200">{feature}</div>
            <div className="text-sm text-cyan-100 opacity-80 text-center">
              2-line description for {feature}.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
