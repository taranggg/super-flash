import React from "react";
import { cn } from "@/lib/utils";

export function TrustedBySection() {
  return (
    <section className={cn("text-center")}>
      <h2 className="text-xl font-semibold mb-6">Trusted by</h2>
      <div className="flex flex-wrap justify-center gap-8 grayscale hover:grayscale-0 transition">
        <div className="w-32 h-16 bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center">
          Logo 1
        </div>
        <div className="w-32 h-16 bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center">
          Logo 2
        </div>
        <div className="w-32 h-16 bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center">
          Logo 3
        </div>
        <div className="w-32 h-16 bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center">
          Logo 4
        </div>
      </div>
    </section>
  );
}
