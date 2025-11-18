import React from "react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  return (
    <section className={cn("")}>
      <h2 className="text-2xl font-bold mb-8 text-center">FAQs</h2>
      <div className="max-w-2xl mx-auto">
        <div className="mb-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4">
          <div className="font-semibold">How fast is delivery?</div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            Usually within 10-15 minutes.
          </div>
        </div>
        <div className="mb-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4">
          <div className="font-semibold">Is it secure?</div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            Yes, all payments are verified and protected.
          </div>
        </div>
        <div className="mb-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4">
          <div className="font-semibold">What are the limits?</div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            See notes above for min/max limits.
          </div>
        </div>
      </div>
    </section>
  );
}
