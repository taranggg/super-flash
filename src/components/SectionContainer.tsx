import { cn } from "@/lib/utils";
import React from "react";

export function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "max-w-screen-xl mx-auto px-6 py-12 rounded-3xl shadow-xl backdrop-blur-lg bg-[rgba(30,30,40,0.6)] border border-[rgba(255,255,255,0.08)]",
        className
      )}
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        borderRadius: "2rem",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(30,30,40,0.6)",
        backdropFilter: "blur(16px)",
      }}
    >
      {children}
    </section>
  );
}
