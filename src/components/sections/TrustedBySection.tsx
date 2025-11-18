import React from "react";
import { cn } from "@/lib/utils";

export function TrustedBySection() {
  return (
    <section className={cn("text-center")}>
      <h2 className="text-xl font-semibold mb-6">Trusted by</h2>
      <div className="flex flex-wrap justify-center gap-8 grayscale hover:grayscale-0 transition">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-32 h-16 rounded-2xl shadow-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,40,0.6)] flex items-center justify-center backdrop-blur-lg text-cyan-100 font-semibold"
            style={{
              boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.37)",
              borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(30,30,40,0.6)",
              backdropFilter: "blur(12px)",
            }}
          >
            Logo {i}
          </div>
        ))}
      </div>
    </section>
  );
}
