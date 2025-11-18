import React from "react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  return (
    <section className={cn("py-12")}>
      <h2 className="text-2xl font-bold mb-8 text-center text-cyan-300 drop-shadow">
        FAQs
      </h2>
      <div className="max-w-2xl mx-auto">
        {[
          {
            q: "How fast is delivery?",
            a: "Usually within 10-15 minutes.",
          },
          {
            q: "Is it secure?",
            a: "Yes, all payments are verified and protected.",
          },
          {
            q: "What are the limits?",
            a: "See notes above for min/max limits.",
          },
        ].map(({ q, a }, i) => (
          <div
            key={q}
            className="mb-6 rounded-2xl shadow-xl backdrop-blur-lg bg-[rgba(30,30,40,0.6)] border border-[rgba(255,255,255,0.08)] p-6"
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(30,30,40,0.6)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="font-semibold text-cyan-200 mb-2">{q}</div>
            <div className="text-sm text-cyan-100 opacity-80">{a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
