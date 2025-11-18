import React from "react";
import { cn } from "@/lib/utils";

export function ImportantNotesSection() {
  return (
    <section className={cn("")}>
      <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <ul className="list-disc pl-6 space-y-2 text-cyan-100">
          <li>Not tradable</li>
          <li>Non-expiring</li>
          <li>Minimum & maximum buying limits</li>
          <li>Pump/Tank protection</li>
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
    </section>
  );
}
