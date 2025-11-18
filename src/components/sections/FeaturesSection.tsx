import React from "react";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
  return (
    <section className={cn("")}>
      <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          "Fast Delivery",
          "Secure Payments",
          "Trusted Support",
          "Best Rates",
        ].map((feature, i) => (
          <div
            key={feature}
            className="rounded-xl bg-zinc-100 dark:bg-zinc-900 p-6 shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-sky-500 dark:bg-cyan-400 rounded-full mb-4" />
            <div className="font-semibold mb-2">{feature}</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
              2-line description for {feature}.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
